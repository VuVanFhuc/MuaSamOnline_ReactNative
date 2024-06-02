import React, { useState, useEffect } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Banner from '../component/Banner';
import BottonAdd from '../component/BottonAdd';

const GiaDung = () => {
  const [giadung, setgiadung] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataa = async () => {
    try {
      const response = await axios.get('http://192.168.53.100:3002/api2/getListgiadung');
      setgiadung(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };

  useEffect(() => {
    fetchDataa();
  }, []);



  const renderProductRows = () => {
    const rows = [];
    const itemsPerRow = 2;

    for (let i = 0; i < giadung.length; i += itemsPerRow) {
      const rowItems = giadung.slice(i, i + itemsPerRow);
      const row = (
        <View style={styles.productRow} key={`row_${i}`}>
          {rowItems.map((item) => (
            <View style={styles.productItem} key={item._id}>
              <Image source={{ uri: item.hinhanh }} style={styles.productImage} />
              <Text style={styles.productName}>{item.ten}</Text>
              <Text style={{ fontStyle: 'italic' }}>{item.price}</Text>
              <View>
              <BottonAdd item={item} />
              </View>
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
      <View>
        <Banner/>
      </View>
      <Text style={styles.productsTitle}>SẢN PHẨM GIA DỤNG </Text>
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

export default GiaDung;

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