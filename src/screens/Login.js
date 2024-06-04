
import React, { useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Register from './Register';

const Login = () => {
    const navigation = useNavigation();
    const dk = () => {
        navigation.navigate("Register")
    }
    const click = () => {
        navigation.navigate("Home")
    }

    return (
        <View >

            <Image source={require('../images/avatar.png')} style={styles.anhlogo} />

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
                Login
            </Text>
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
            {/* NÚT ĐĂNG NHẬP Ở ĐÂY */}
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
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                }}>Đăng nhập</Text>
            </Pressable>
            <View style={{ flexDirection: "row" }}>
                <Pressable style={{ width: "34%", height: 50, backgroundColor: "#fff", marginLeft: "15%", marginTop: 15, borderRadius: 20 }} >
                    <Image source={require('../images/facebook.png')} style={{ width: 30, height: 30, marginLeft: 10, marginTop: 10, marginLeft: 50 }} />
                </Pressable>
                <Pressable style={{ width: "34%", height: 50, backgroundColor: "#fff", marginRight: "15%", marginTop: 15, marginLeft: "2%", borderRadius: 20 }} >
                    <Image source={require('../images/google.png')} style={{ width: 30, height: 30, marginLeft: 10, marginTop: 10, marginLeft: 50 }} />
                </Pressable>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "red", marginTop: 45, marginLeft: "18%" }}>Bạn đã có tài khoản chưa ?</Text>
                <Text style={{ color: "#f38020", marginTop: 40, marginLeft: 10, fontWeight: "bold", fontSize: 20 }} onPress={dk}>Đăng Ký</Text>
            </View>
        </View>
    );
}

export default Login;

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