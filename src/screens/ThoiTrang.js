import React, { useState, useEffect } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ThoiTrang = () => {
  const [thoitrang, setthoitrang] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataa = async () => {
    try {
      const response = await axios.get('http://192.168.53.103:3001/api1/getListthoitrang');
      setthoitrang(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };

  useEffect(() => {
    fetchDataa();
  }, []);

  const renderProductItems = () => {
    return thoitrang.map((item) => (
      <View style={styles.productItem} key={item._id}>
        <Image source={{ uri: item.hinhanh }} style={styles.productImage} />
        <Text style={styles.productName}>{item.ten}</Text>
        <Text style={{ fontStyle: 'italic' }}>{item.price}</Text>
        <Pressable style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 15, color: 'red' }}>Thêm</Text>
          <Image source={require('../images/3.png')} style={{ width: 20, height: 20 }} />
        </Pressable>
      </View>
    ));
  };

  const renderProductRows = () => {
    const rows = [];
    const itemsPerRow = 2;

    for (let i = 0; i < thoitrang.length; i += itemsPerRow) {
      const rowItems = thoitrang.slice(i, i + itemsPerRow);
      const row = (
        <View style={styles.productRow} key={`row_${i}`}>
          {rowItems.map((item) => (
            <View style={styles.productItem} key={item._id}>
              <Image source={{ uri: item.hinhanh }} style={styles.productImage} />
              <Text style={styles.productName}>{item.ten}</Text>
              <Text style={{ fontStyle: 'italic' }}>{item.price}</Text>
              <Pressable style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: 'red' }}>Thêm</Text>
                <Image source={require('../images/3.png')} style={{ width: 20, height: 20 }} />
              </Pressable>
            </View>
          ))}
        </View>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <View style={styles.productsContainer}>
      <Text style={styles.productsTitle}>SẢN PHẨM THỜI TRANG </Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {renderProductRows()}
        </ScrollView>
      )}
    </View>
  );
};

export default ThoiTrang;

const styles = StyleSheet.create({
  productsContainer: {
    padding: 10,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#66cfff',
    textAlign:"center"
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productItem: {
    alignItems: 'center',
    width: '45%',
    height: 200,
  },
  productImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});