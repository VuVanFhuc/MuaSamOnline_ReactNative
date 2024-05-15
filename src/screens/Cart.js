import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const renderItem = ({ item }) => {
    if (!item || !item.hinhanh || !item.ten || !item.price) {
      return (
        <View style={styles.item}>
          <Text style={styles.errorText}>Thông tin sản phẩm không đầy đủ</Text>
        </View>
      );
    }

    return (
      <View style={styles.productItem} key={item._id}>
        <View>
          <Image source={{ uri: item.hinhanh }} style={styles.productImage} />

        </View>
        <View>
          <Text style={styles.productName}>{item.ten}</Text>
          <Text style={{ fontStyle: 'italic', marginLeft: 16 }}>{item.price}</Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text style={{ margin: 10 ,color:"red",fontSize:20}}>Buy</Text>
            <Text style={{ margin: 10,color:"green",fontSize:20}}>Delete</Text>
          </View>
        </View>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  errorText: {
    color: 'red',
  },
  productItem: {
    flexDirection: "row",
    margin: 20
  },
  productImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginRight: 10
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});
