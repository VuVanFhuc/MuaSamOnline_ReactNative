import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { buyItemToCart } from './cartSlice';

const BottonBuy = ({ item }) => {
  const dispatch = useDispatch();

  const clickBuy = () => {
    dispatch(buyItemToCart(item));
  };

  return (
    <Pressable onPress={clickBuy}>
      <Text style={styles.buyText}>Chi tiết</Text>
    </Pressable>
  );
};

export default BottonBuy;

const styles = StyleSheet.create({
  buyText: {
    margin: 10,
    color: "#f38020",
    fontSize: 20
  },
});
