
import React, { useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Register from './Register';

const Login = () => {
    const navigation = useNavigation();
    const dk =()=>{
        navigation.navigate("Register")
    }
    const click =()=>{
        navigation.navigate("Home")
    }

    return (
        <View >
            
            <Image source={require('../images/backround.jpg')} style={styles.anhlogo} />
            <Text style={{ color: "#8bc6f0", fontWeight: "bold", fontSize: 50, textAlign: "center", margin: 30 }}>Login</Text>

            <TextInput placeholder='Nhập số điện thoại ' style={{ width: "70%", height: 50, backgroundColor: "#8bc6f0", marginLeft: "15%", marginRight: "15%" }} />
            <TextInput placeholder='Nhập mật khẩu  ' style={{ width: "70%", height: 50, backgroundColor: "#8bc6f0", marginLeft: "15%", marginRight: "15%", marginTop: 15 }} />
            {/* NÚT ĐĂNG NHẬP Ở ĐÂY */}
            <Pressable style={{ width: "70%", height: 50, backgroundColor: "#8bc6f0", marginLeft: "15%", marginRight: "15%", marginTop: 15 }} onPress={click}>
                <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 20, fontWeight: "bold" }}>Đăng nhập</Text>
            </Pressable>
            <View style={{ flexDirection: "row" }}>
                <Pressable style={{ width: "34%", height: 50, backgroundColor: "pink", marginLeft: "15%",  marginTop: 15 }} >
                    <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 20, fontWeight: "bold" }}>FaceBook</Text>
                </Pressable>
                <Pressable style={{ width: "34%", height: 50, backgroundColor: "#d4c1a3",  marginRight: "15%", marginTop: 15 ,marginLeft:"2%"}} >
                    <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 20, fontWeight: "bold" }}>Google</Text>
                </Pressable>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={{ color: "red",   marginTop: 45,marginLeft:"18%" }}>Bạn đã có tài khoản chưa ?</Text>
            <Text style={{ color: "#8bc6f0",   marginTop: 40,marginLeft:10,fontWeight:"bold",fontSize:20 }} onPress={dk}>Đăng Ký</Text>
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