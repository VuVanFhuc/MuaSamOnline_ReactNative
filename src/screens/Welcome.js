
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
            console.log("chuyển qua màn hình đăng nhập thành công ");
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View>
            <Image source={require('../images/avatar.png')} style={styles.anhnen}/>
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    anhnen: {
        width: 100,
        height: 100,
        borderRadius:20,
        alignSelf:"center",
        marginTop:400,
    },
});