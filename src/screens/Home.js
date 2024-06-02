import React, { useState, useEffect } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Banner from '../component/Banner';
import BottonAdd from '../component/BottonAdd';

const Home = () => {
  // Dữ liệu cho menu
  const listAnh = [
    { id: '0', anh: 'https://preview.redd.it/7lbrk4u02bs01.jpg?auto=webp&s=34cc2903850921feb933e7c9432c7b76e9daa3c1', name: 'Máy Tính' },
    { id: '1', anh: 'https://olala.lc/image/C4F1CCB65280_0.jpeg', name: 'Thời Trang' },
    { id: '2', anh: 'https://toplist.vn/images/800px/noi-com-dien-thong-minh-viomi-ih-441109.jpg', name: 'Gia Dụng' },
    { id: '3', anh: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2020/11/17/775002/417151/iphone_14_pro_max_4_color_options_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4295698.jpg', name: 'Điện Thoại' },
    { id: '4', anh: 'https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-sliced-into-six-slices-1536x1024.jpg', name: 'Thực Phẩm' },
  ];

  const navigation = useNavigation();

  const chuyen = () => {
    navigation.navigate("Profile");
  };

  const click = (item) => {
    switch (item.name) {
      case 'Máy Tính':
        navigation.navigate('MayTinh');
        break;
      case 'Thời Trang':
        navigation.navigate('ThoiTrang');
        break;
      case 'Gia Dụng':
        navigation.navigate('GiaDung');
        break;
      case 'Điện Thoại':
        navigation.navigate('DienThoai');
        break;
      case 'Thực Phẩm':
        navigation.navigate('ThucPham');
        break;
      default:
        break;
    }
  };

  const [sanPham, setSanPham] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSanPham = async () => {
    try {
      const response = await axios.get('http://192.168.53.100:3000/api/getListSanPham');
      setSanPham(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };



  useEffect(() => {
    fetchSanPham();
  }, []);

  return (
    <ScrollView>
      {/* Thanh tìm kiếm */}
      <View style={styles.header}>
        <Pressable onPress={chuyen}>
          <Image source={require('../images/backround.jpg')} style={{ width: 40, height: 40, borderRadius: 30 }} />
        </Pressable>
        <TextInput placeholder="Tìm kiếm tại đây" style={styles.searchInput} />
        <Image source={require('../images/mic.png')} style={styles.micIcon} />
      </View>

      {/* Danh sách menu */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageList}>
        {listAnh.map((item) => (
          <Pressable onPress={() => click(item)} key={item.id}>
            <Image source={{ uri: item.anh }} style={styles.listImage} />
            <Text style={styles.imageName}>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      {/* BANNER TỰ ĐỘNG Ở ĐÂY */}
      <View>
        <Banner/>
      </View>
      {/* Sản phẩm máy tính */}
      <View style={styles.productsContainer}>
        <Text style={styles.productsTitle}>Top Sản Phẩm</Text>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={sanPham}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Image source={{ uri: item.hinhanh }} style={styles.productImage} />
                <Text style={styles.productName}>{item.ten}</Text>
                <Text style={{ fontStyle: 'italic' }}>{item.price}</Text>
                <View>
                <BottonAdd item={item} />
                </View>
              </View>
            )}
          />
        )}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    margin: 5,
  },
  micIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  imageList: {
    marginTop: 10,
  },
  listImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  imageName: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  productsContainer: {
    padding: 10,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#66cfff',
    marginBottom: 10,
  },
  productItem: {
    alignItems: 'center',
    marginRight: 10,
    width: 200,
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

export default Home;
