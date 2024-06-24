import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable, Alert, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedItem } from './cartSlice';

const ProductModal = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector((state) => state.cart.selectedItem);
    const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(selectedItem ? selectedItem.price : 0);

    useEffect(() => {
        if (selectedItem) {
            setTotalPrice(quantity * selectedItem.price);
        }
    }, [quantity, selectedItem]);

    if (!selectedItem) return null;

    const handleOrder = () => {
        dispatch(clearSelectedItem());
        Alert.alert("Order Success", `Payment Method: ${paymentMethod}`);
    };

    const handleQuantityChange = (text) => {
        const newQuantity = Number(text);
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleCancel = () => {
        dispatch(clearSelectedItem());
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
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Image source={{ uri: selectedItem.hinhanh }} style={styles.productImage} />
                        <Text style={styles.productName}>{selectedItem.ten}</Text>
                        <Text style={styles.productPrice}>{`Giá: ${selectedItem.price} VND`}</Text>
                        <Text style={styles.productName}>Mô tả : {selectedItem.mota}</Text>
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

                        <Text style={styles.paymentMethodLabel1}>Số lượng:</Text>
                        <View style={styles.quantityContainer}>
                            <Pressable style={styles.quantityButton} onPress={decrementQuantity}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </Pressable>
                            <TextInput
                                style={styles.quantityInput}
                                keyboardType="numeric"
                                value={String(quantity)}
                                onChangeText={handleQuantityChange}
                            />
                            <Pressable style={styles.quantityButton} onPress={incrementQuantity}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </Pressable>
                        </View>
                        <Text style={styles.totalPrice}>{`Tổng tiền: ${totalPrice} VND`}</Text>
                        <View style={{ width: "100%", height: 1, backgroundColor: "#f38020" }} />
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                style={styles.cancelButton}
                                onPress={handleCancel}
                            >
                                <Text style={styles.cancelButtonText}>Hủy</Text>
                            </Pressable>
                            <Pressable
                                style={styles.orderButton}
                                onPress={handleOrder}
                            >
                                <Text style={styles.orderButtonText}>Đặt hàng</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
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
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    scrollContainer: {
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
        marginBottom: 10,
    },
    paymentMethodLabel: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#f38020",
        margin: 15
    },
    paymentMethodLabel1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        margin: 10
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    quantityButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        borderColor: 'gray',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    quantityInput: {
        width: 60,
        height: 40,
        borderColor: '#f38020',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
    },
    totalPrice: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
        color: "#f38020",
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
        backgroundColor: '#f38020',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    },
    cancelButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonText: {
        color: 'black',
        fontSize: 16,
        textAlign: "center"
    },
});

export default ProductModal;
