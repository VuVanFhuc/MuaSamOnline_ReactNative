import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedItem } from './cartSlice';

const ProductModal = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector((state) => state.cart.selectedItem);
    const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

    if (!selectedItem) return null;

    const handleOrder = () => {
        dispatch(clearSelectedItem());
        Alert.alert("Order Success", `Payment Method: ${paymentMethod}`);
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={!!selectedItem}
            onRequestClose={() => dispatch(clearSelectedItem())}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Image source={{ uri: selectedItem.hinhanh }} style={styles.productImage} />
                    <Text style={styles.productName}>{selectedItem.ten}</Text>
                    <Text style={styles.productPrice}>{selectedItem.price}</Text>
                    <Text style={styles.paymentMethodLabel}>Phương thức thanh toán:</Text>

                    <View style={styles.radioContainer}>
                        <View style={styles.radioButton}>
                            <Pressable onPress={() => setPaymentMethod('Cash on Delivery')}>
                                <View style={paymentMethod === 'Cash on Delivery' ? styles.radioSelected : styles.radioUnselected} />
                            </Pressable>
                            <Text style={styles.radioText}>Cash on Delivery</Text>
                        </View>
                        <View style={styles.radioButton}>
                            <Pressable onPress={() => setPaymentMethod('Pay Now')}>
                                <View style={paymentMethod === 'Pay Now' ? styles.radioSelected : styles.radioUnselected} />
                            </Pressable>
                            <Text style={styles.radioText}>Pay Now</Text>
                        </View>
                    </View>

                    <Pressable
                        style={styles.orderButton}
                        onPress={handleOrder}
                    >
                        <Text style={styles.orderButtonText}>Đặt hàng</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 150,
        height: 120,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 16,
        marginBottom: 20,
    },
    paymentMethodLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
        fontStyle: "italic",
        color:"pink"
    },
    radioContainer: {
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioUnselected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
    },
    radioSelected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#000',
        marginRight: 10,
    },
    radioText: {
        fontSize: 16,
    },
    orderButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    orderButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ProductModal;
