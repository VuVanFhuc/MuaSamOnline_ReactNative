import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Regular expression for email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password || !confirmPassword) {
            Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Thông báo', 'Email không đúng định dạng.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Thông báo', 'Mật khẩu và xác nhận mật khẩu không khớp.');
            return;
        }

        const newUser = { email, password };

        fetch('http://192.168.53.101:3005/taikhoan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                Alert.alert('Thông báo', 'Đăng ký thành công.');
                navigation.navigate("Login");
            })
            .catch(error => {
                console.error('Error:', error);
                Alert.alert('Thông báo', 'Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.');
            });
    };

    return (
        <View>
            <Image source={require('../images/avatar.png')} style={styles.anhlogo} />
            <Text style={styles.registerText}>
                Register
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
            <TextInput
                placeholder='Nhập lại mật khẩu'
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Pressable style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Đăng ký</Text>
            </Pressable>
        </View>
    );
};

export default Register;

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
    registerText: {
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
    registerButton: {
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
    registerButtonText: {
        textAlign: "center",
        lineHeight: 50,
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    }
});
