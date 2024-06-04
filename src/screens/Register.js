import React, { useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const click = () => {
        navigation.navigate("Login")
    }

    return (
        <View >
            {/* LOGO Ở ĐÂY  */}
            <Image source={require('../images/avatar.png')} style={styles.anhlogo} />
            {/* TÊN FORM Ở ĐÂY  */}
            <Text style={{
                color: "#f38020",
                fontWeight: "bold",
                fontSize: 50,
                textAlign: "center",
                margin: 30,
                textShadowColor: '#000', // Màu bóng
                textShadowOffset: { width: 2, height: 2 }, // Độ lệch bóng
                textShadowRadius: 3 // Bán kính bóng
            }}>
                Register
            </Text>
            {/* NHẬP ĐIỆN THOẠI  */}
            <TextInput placeholder='Nhập số điện thoại ' style={{
                width: "70%",
                height: 50,
                backgroundColor: "#f38020",
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: 15,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2
            }} />
            {/* NHẬP MẬT KHẨU  */}
            <TextInput placeholder='Nhập mật khẩu  ' style={{
                width: "70%",
                height: 50,
                backgroundColor: "#f38020",
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: 15,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2
            }} />
            {/* NHẬP LẠI MẬT KHẨU Ở ĐÂY  */}
            <TextInput placeholder='Nhập lại mật khẩu  ' style={{
                width: "70%",
                height: 50,
                backgroundColor: "#f38020",
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: 15,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2
            }} />
            {/* NÚT ĐĂNG KÝ Ở ĐÂY  */}
            <Pressable style={{
                width: "70%",
                height: 50,
                backgroundColor: "#f38020",
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: 15,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2
            }} onPress={click}>
                <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 20, fontWeight: "bold" }}>Đăng ký</Text>
            </Pressable>

        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    anhnen: {
        width: "100%",
        height: "100%",

    },
    anhlogo: {
        width: 100,
        height: 100,

        marginLeft: 150,
        borderRadius: 100,
        borderWidth: 2,
        marginTop: 80,
        borderColor: "#fff",
        backgroundColor: "#fff"
    },

});