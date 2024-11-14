import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dk = () => {
        navigation.navigate("Register");
    };

    const click = () => {
        if (!email || !password) {
            Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
            return;
        }
        fetch('http://192.168.53.101:3005/taikhoan')
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => user.email === email && user.password === password);
                if (user) {
                    navigation.navigate("Home");
                }else {
                    Alert.alert('Thông báo', 'Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Alert.alert('Thông báo', 'Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
            });
    };

    return (
        <View>
            <Image source={require('../images/avatar.png')} style={styles.anhlogo} />

            <Text style={styles.loginText}>
                Login
            </Text>
            <TextInput
                placeholder='Nhập Email'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Nhập mật khẩu'
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={styles.loginButton} onPress={click}>
                <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </Pressable>
            <View style={styles.socialButtons}>
                <Pressable style={styles.socialButton}>
                    <Image source={require('../images/facebook.png')} style={styles.socialIcon} />
                </Pressable>
                <Pressable style={styles.socialButton}>
                    <Image source={require('../images/google.png')} style={styles.socialIcon} />
                </Pressable>
            </View>
            <View style={styles.register}>
                <Text style={styles.registerText}>Bạn đã có tài khoản chưa?</Text>
                <Text style={styles.registerLink} onPress={dk}>Đăng Ký</Text>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    anhlogo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 2,
        marginTop: 80,
        borderColor: "#fff",
        backgroundColor: "#fff"
    },
    loginText: {
        color: "#f38020",
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
        margin: 30,
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3
    },
    input: {
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
        shadowRadius: 2,
        paddingLeft: 20
    },
    loginButton: {
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
    },
    loginButtonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    socialButtons: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 15
    },
    socialButton: {
        width: "34%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    socialIcon: {
        width: 30,
        height: 30
    },
    register: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 45
    },
    registerText: {
        color: "#f38020",
        marginTop:5
    },
    registerLink: {
        color: "#f38020",
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 20
    }
});
