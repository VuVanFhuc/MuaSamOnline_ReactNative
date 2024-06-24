import React, { useState, useEffect } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Banner from '../component/Banner';
import BottonAdd from '../component/BottonAdd';

const MayTinh = () => {
  const [sanPham, setSanPham] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/getListSanPham');
      setSanPham(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderProductRows = () => {
    const rows = [];
    const itemsPerRow = 2;

    for (let i = 0; i < sanPham.length; i += itemsPerRow) {
      const rowItems = sanPham.slice(i, i + itemsPerRow);
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
      <Text style={styles.productsTitle}>SẢN PHẨM MÁY TÍNH</Text>
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

export default MayTinh;

const styles = StyleSheet.create({
  productsContainer: {
    padding: 10,
  },
  productsTitle: {
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f38020',
    textAlign: 'center',
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
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
