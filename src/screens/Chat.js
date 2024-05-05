import { Image, StyleSheet, Text, View, Pressable, TextInput, FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const chuyen = () => {
    navigation.navigate("Profile")
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flex: 1 }}>
        {/* PHẦN ĐẦU  */}
        <View style={styles.phandau}>
          <Image source={require('../images/back.png')} style={{ width: 40, height: 40 }} />
          <Pressable onPress={chuyen}>
            <Image source={require('../images/backround.jpg')} style={{ width: 40, height: 40, borderRadius: 30 }} />
          </Pressable>
          <View>
            <Text style={{ fontWeight: "bold", marginLeft: 10 }}>phucvvph34858@fpt.edu.vn</Text>
            <Text style={{ fontStyle: "italic", marginLeft: 10 }}>đang online</Text>
          </View>
        </View>
        {/* HIỂN THỊ NỘI DUNG TIN NHẮN Ở ĐÂY  */}
        <FlatList style={styles.noidung}>

        </FlatList>
        <View style={styles.nhaptinnhan}>
          <TextInput placeholder='nhập tin nhắn ở đây ' style={{ height: 50, width: "85%", backgroundColor: "#aaaa", borderRadius: 20 }} />
          <Image source={require('../images/send.png')} style={{ width: 40, margin: 7, height: 40, borderRadius: 30 }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Chat

const styles = StyleSheet.create({
  phandau: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10
  },
  nhaptinnhan: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10
  },
  noidung: {
    width: "100%",
    height: 530
  }
})
