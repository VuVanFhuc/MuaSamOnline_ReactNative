import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Banner = () => {
  const bannerAnh = [
    { id: '0', img: 'https://image.shutterstock.com/image-vector/shopping-online-on-website-mobile-260nw-1206570109.jpg' },
    { id: '1', img: 'https://assets.pandaily.com/uploads/2020/06/online-shopping-apps-1600x832.jpg' },
    { id: '2', img: 'https://img.freepik.com/premium-vector/online-shopping-backgroung_488995-5.jpg' },
    { id: '3', img: 'https://image.shutterstock.com/image-vector/shopping-online-on-website-mobile-260nw-1206570109.jpg' },
    { id: '4', img: 'https://static.vecteezy.com/system/resources/previews/004/604/540/large_2x/online-shopping-on-website-and-mobile-application-by-smart-phone-digital-marketing-shop-and-store-concept-vector.jpg' },
    { id: '5', img: 'https://image.freepik.com/free-vector/online-shopping-store-website-mobile-phone-smart-business-marketing-concept_62391-339.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <View style={styles.bannerContainer}>
        <Swiper 
          autoplay 
          autoplayTimeout={3} 
          showsPagination={false} 
          loop 
          onIndexChanged={(index) => setCurrentIndex(index)}
        >
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
    </View>
  )
}

export default Banner

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
