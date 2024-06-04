import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
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
    <View>
      <Pressable onPress={doianh}>
        <Image source={require('../images/avatar.png')} style={{ width: 100, height: 100, borderRadius: 100, marginLeft: 150, marginTop: 100 }} />
      </Pressable>

      <View style={styles.nut}>
        <Image source={require('../images/vitri.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doinen} style={{ textAlign: "center", marginTop: 10, color: "black", fontWeight: "bold", marginLeft: 20 }}>THIẾT LẬP VỊ TRÍ </Text>
      </View>
      <View style={styles.text}>
        <Image source={require('../images/phone.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doiphone} style={{ textAlign: "center", marginTop: 10, marginLeft: 20 }}>0981139895</Text>
      </View>
      <View style={styles.text}>
        <Image source={require('../images/pass.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={doimatkhau} style={{ textAlign: "center", marginTop: 10, color: "black", fontWeight: "bold", marginLeft: 20 }}>ĐỔI MẬT KHẨU  </Text>
      </View>
      <View style={styles.text}>
        <Image source={require('../images/3.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={xemGioHang} style={{ textAlign: "center", marginTop: 10, color: "black", fontWeight: "bold", marginLeft: 20 }}>XEM GIỎ HÀNG   </Text>
      </View>
      <View style={styles.text}>
        <Image source={require('../images/out.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
        <Text onPress={dangxuat} style={{ textAlign: "center", marginTop: 10, color: "black", fontWeight: "bold", marginLeft: 20 }}>ĐĂNG XUẤT  </Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#f38020",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    flexDirection: "row"
  },
  nut: {
    backgroundColor: "#f38020",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    flexDirection: "row"
  }
})