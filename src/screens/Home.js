import React, { useState, useEffect, useRef } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  // Dữ liệu cho menu
  const listAnh = [
    { id: '0', anh: 'https://preview.redd.it/7lbrk4u02bs01.jpg?auto=webp&s=34cc2903850921feb933e7c9432c7b76e9daa3c1', name: 'Máy Tính' },
    { id: '1', anh: 'https://olala.lc/image/C4F1CCB65280_0.jpeg', name: 'Thời Trang' },
    { id: '2', anh: 'https://toplist.vn/images/800px/noi-com-dien-thong-minh-viomi-ih-441109.jpg', name: 'Gia Dụng' },
    { id: '3', anh: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2020/11/17/775002/417151/iphone_14_pro_max_4_color_options_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4295698.jpg', name: 'Điện Thoại' },
    { id: '4', anh: 'https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-sliced-into-six-slices-1536x1024.jpg', name: 'Thực Phẩm' },

  ];

  // Dữ liệu cho banner
  const bannerAnh = [
    { id: '0', img: 'https://image.shutterstock.com/image-vector/shopping-online-on-website-mobile-260nw-1206570109.jpg' },
    { id: '1', img: 'https://assets.pandaily.com/uploads/2020/06/online-shopping-apps-1600x832.jpg' },
    { id: '2', img: 'https://img.freepik.com/premium-vector/online-shopping-backgroung_488995-5.jpg' },
    { id: '3', img: 'https://image.shutterstock.com/image-vector/shopping-online-on-website-mobile-260nw-1206570109.jpg' },
    { id: '4', img: 'https://static.vecteezy.com/system/resources/previews/004/604/540/large_2x/online-shopping-on-website-and-mobile-application-by-smart-phone-digital-marketing-shop-and-store-concept-vector.jpg' },
    { id: '5', img: 'https://image.freepik.com/free-vector/online-shopping-store-website-mobile-phone-smart-business-marketing-concept_62391-339.jpg' },
  ];

  // Quản lý trạng thái cho banner tự động
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const navigation = useNavigation();

  const chuyen = () => {
    navigation.navigate("Profile")
  }
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
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerAnh.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [bannerAnh.length]);

  // Quản lý trạng thái cho danh sách sản phẩm
  const [sanPham, setSanPham] = useState([]);
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

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.53.103:3000/api/getListSanPham');
      setSanPham(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      {/* THANH TÌM KIẾM Ở ĐÂY  */}
      <View style={styles.header}>
        <Pressable onPress={chuyen}>
          <Image source={require('../images/backround.jpg')} style={{ width: 40, height: 40, borderRadius: 30 }} />
        </Pressable>
        <TextInput placeholder="Tìm kiếm tại đây" style={styles.searchInput} />
        <Image source={require('../images/mic.png')} style={styles.micIcon} />
      </View>
      {/* DANH SÁCH MENU Ở ĐÂY  */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageList}>
        {listAnh.map((item) => (
          <Pressable onPress={() => click(item)} key={item.id}>
            <Image source={{ uri: item.anh }} style={styles.listImage} />
            <Text style={styles.imageName}>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* BANNER TỰ ĐỘNG Ở ĐÂY  */}
      <View style={styles.bannerContainer}>
        <Swiper autoplay autoplayTimeout={5} showsPagination={false} loop>
          {bannerAnh.map((item) => (
            <View key={item.id}>
              <Image source={{ uri: item.img }} style={styles.bannerImage} resizeMode="cover" />
            </View>
          ))}
        </Swiper>

        <View style={styles.bannerIndicator}>
          {bannerAnh.map((item, index) => (
            <Text key={item.id} style={currentIndex === index ? styles.activeDot : styles.dot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>

      {/* SẢN PHẨM LAP TOP Ở ĐÂY  */}
      <View style={styles.productsContainer}>
        <Text style={styles.productsTitle}>TOP SẢN PHẨM </Text>
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
                <Text style={{ fontStyle: "italic" }}>{item.price}</Text>
                <Pressable style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: "red" }}>Thêm</Text>
                  <Image source={require('../images/3.png')} style={{ width: 20, height: 20 }} />
                </Pressable>
              </View>
            )}
          />
        )}
      </View>
      {/* DANH SÁCH SẢN PHẨM THỜI TRANG Ở ĐÂY  */}
      <View style={styles.productsContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={thoitrang}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Image source={{ uri: item.hinhanh }} style={styles.productImage} />
                <Text style={styles.productName}>{item.ten}</Text>
                <Text style={{ fontStyle: "italic" }}>{item.price}</Text>
                <Pressable style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: "red" }}>Thêm</Text>
                  <Image source={require('../images/3.png')} style={{ width: 20, height: 20 }} />
                </Pressable>
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
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#66cfff',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  spinnerIcon: {
    width: 20,
    height: 20,
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
  bannerContainer: {
    height: 200,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerIndicator: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 20,
    margin: 3,
  },
  activeDot: {
    color: '#fff',
    fontSize: 20,
    margin: 3,
  },
  productsContainer: {
    padding: 10,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#66cfff"
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
    color: "black"
  },
});

export default Home;
