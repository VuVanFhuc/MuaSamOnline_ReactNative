import { Alert, Image, Pressable, StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const Profile = () => {
  const listAnh = [
    {
      id: '0', anh: 'https://png.pngtree.com/png-clipart/20190903/original/pngtree-wallet-icon-png-image_4419854.jpg', name: 'Chờ xác nhận'
    },
    { id: '1', anh: 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-express-box-image_2239230.jpg', name: 'Chờ lấy hàng' },
    { id: '2', anh: 'https://img.lovepik.com/free-png/20210922/lovepik-waiter-png-image_401122427_wh1200.png', name: 'Chờ giao hàng' },
    { id: '3', anh: 'https://image.shutterstock.com/image-vector/customer-satisfaction-hand-holding-clipboard-260nw-1414335119.jpg', name: 'Đánh giá' },
  ]
  const listAnh1 = [
    {
      id: '0', anh: 'https://cf.shopee.vn/file/3473fdebf54f7985862617e3fe136d7f', name: 'Đơn đầu'
    },
    { id: '1', anh: 'https://turackchinhhang.com/wp-content/uploads/2019/06/KHUYEN-MAI.png', name: 'Siêu rẻ' },
    { id: '2', anh: 'https://thuthuatnhanh.com/wp-content/uploads/2022/06/Hinh-anh-sale-dep-nhat.png', name: 'Giảm giá' },
    { id: '3', anh: 'https://baobihuuco.com/wp-content/uploads/2019/04/icon-giao-hang-toan-quoc.jpg', name: 'miễn phí ship' },
  ]
  const navigation = useNavigation();
  const doinen = () => {
    Alert.alert("tính năng chưa hoàn thành ")
  }
  const doimatkhau = () => {
    Alert.alert("tính năng chưa hoàn thành ")
  }
  const dangxuat = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có muốn đăng xuất?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Đăng xuất đã bị hủy"),
          style: "cancel"
        },
        {
          text: "Đồng ý", onPress: () => {
            navigation.navigate("Login")
          }
        }
      ]
    );

  }
  const doiphone = () => {
    Alert.alert("Error : bạn không thể đổi tài khoản đã đăng ký ")
  }
  const doianh = () => {
    Alert.alert("bạn có muốn đổi avatar không ? ")
  }
  const xemGioHang = () => {
    navigation.navigate("Cart")
  }


  return (
    <ScrollView>
      <ImageBackground source={{uri:"https://quangcaominhlong.vn/wp-content/uploads/2020/12/nen-background-tet-hoa-dao_105958650.png"}} style={{ height: 150, width: "100%", backgroundColor: "#f38020", flexDirection: "row" }}>
      <View>
          <Pressable onPress={doianh}>
            <Image source={require('../images/nguoidung.png')} style={{
              width: 70,
              height: 70, borderRadius: 100, marginTop: 70
            }} />
          </Pressable>
        </View>
        <View>
          <Text style={{ marginTop: 75, fontSize: 25, marginLeft: 15, fontWeight: "bold", color: "white" }}>phucvvph34858</Text>
          <Text style={{
            marginTop: 2, marginLeft: 15,
            fontStyle: "italic", color: "white"
          }}>0 Người Theo Dõi | 3 đang theo dõi </Text>
        </View>
      </ImageBackground>
      
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.m}>Đơn mua</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.m1}>Xem lịch sử mua hàng </Text>
          <Image source={require("../images/next.png")} style={{ width: 15, height: 15, marginTop: 14 }} />
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <Image source={require("../images/don.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>Chờ xác nhận</Text>
        </View>
        <View>
          <Image source={require("../images/thung.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>Chờ lấy hàng</Text>
        </View>
        <View>
          <Image source={require("../images/carr.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>Chờ giao hàng</Text>
        </View>
        <View>
          <Image source={require("../images/danhgia.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>Đánh giá</Text>
        </View>
      </View>
      <View style={{ width: "100%", height: 10, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <Text style={styles.m}>Ưu đãi dành riêng cho bạn</Text>
      <View style={styles.imageContainer}>
        {listAnh1.map((item) => (
          <Pressable key={item.id}>
            <Image source={{ uri: item.anh }} style={styles.listImage} />
            <Text style={styles.imageName}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
      <View style={{ width: "100%", height: 10, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <Text style={styles.m}>Tiện ích của tôi</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <Image source={require("../images/vi.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>Pay</Text>
        </View>
        <View>
          <Image source={require("../images/vvi.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>SpayLater</Text>
        </View>
        <View>
          <Image source={require("../images/shope.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>my coin</Text>
        </View>
        <View>
          <Image source={require("../images/ticket.png")} style={{ height: 30, width: 30, alignSelf: "center" }} />
          <Text style={{ color: "black" }}>Voucher</Text>
        </View>
      </View>
      <View style={{ width: "100%", height: 10, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/huy.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Khách hàng thân thiết</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/tivi.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black",  marginLeft: 20 }}>Kênh người sáng tạo </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/tim.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Đã thích </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/shop.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black",  marginLeft: 20 }}>Shop đang theo dõi</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/qua.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black",  marginLeft: 20 }}>Săn thưởng </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/ganday.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Đã xem gần đây </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/sodu.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Số dư tài khoản trong app</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/shope.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Nhận xu mỗi ngày </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/danhgia.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Đánh giá của tôi</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/lienket.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Tiếp thị liên kết</Text>
      </View>
            
<View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.nut}>
        <Image source={require('../images/map.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", marginLeft: 20 }}>Thiết lập vị trí </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.text}>
        <Image source={require('../images/hotline.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doiphone} style={{ textAlign: "center", marginTop: 10, marginLeft: 20,color:"black" }}>0981139895</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.text}>
        <Image source={require('../images/baomat.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doimatkhau} style={{ textAlign: "center", marginTop: 10, color: "black",marginLeft: 20 }}>Đổi mật khẩu </Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.text}>
        <Image source={require('../images/giohang.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={xemGioHang} style={{ textAlign: "center", marginTop: 10, color: "black",marginLeft: 20 }}>Xem giỏ hàng</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
      <View style={styles.text}>
        <Image source={require('../images/logout.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={dangxuat} style={{ textAlign: "center", marginTop: 10, color: "black",marginLeft: 20 }}>Đăng xuất</Text>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#e8e8e8", marginTop: 20 }} />
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    flexDirection: "row"
  },
  nut: {
    marginLeft: 10,
    flexDirection: "row"
  },
  m: {
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'left',
  },
  m1: {
    marginTop: 10,
    fontFamily: "italic",
    fontWeight: "bold"
  },
  imageList: {
    marginTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    alignSelf: "center"
  },
  imageName: {
    textAlign: 'center',
    color: '#525252',
    fontWeight: 'bold',
  },
})