import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice';

const BottonAdd = ({ item }) => {
  const dispatch = useDispatch();

  const clickadd = () => {
    dispatch(addItemToCart(item)); 
    Alert.alert("Thêm vào giỏ hàng thành công");
  };

  return (
    <Pressable onPress={clickadd} style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 15, color: 'red' }}>Add</Text>
      </View>
      <View>
        <Image source={require("../images/3.png")} style={{ width: 20, height: 20 }} />
      </View>
    </Pressable>
  );
};

export default BottonAdd;

const styles = StyleSheet.create({});
