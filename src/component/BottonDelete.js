import React from 'react';
import { Pressable, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from './cartSlice';

const BottonDelete = ({ item }) => {
  const dispatch = useDispatch();

  const clickRemove = () => {
    dispatch(removeItemFromCart(item));
    Alert.alert("Xóa sản phẩm khỏi giỏ hàng thành công");
  };

  return (
    <Pressable onPress={clickRemove}>
      <Text style={styles.deleteText}>Delete</Text>
    </Pressable>
  );
};

export default BottonDelete;

const styles = StyleSheet.create({
  deleteText: {
    margin: 10,
    color: "red",
    fontSize: 20
  },
});
