import { Image, StyleSheet, Text, View, Pressable, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const chuyen = () => {
    navigation.navigate("Profile")
  }
  const back = () => {
    navigation.goBack()
  }

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length.toString(), text: message }]);
      setMessage('');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={{ flex: 1 }}>
        {/* PHẦN ĐẦU  */}
        <View style={styles.phandau}>
          <Pressable onPress={back}>
            <Image source={require('../images/back.png')} style={{ width: 40, height: 40 }} />
          </Pressable>

          <Pressable onPress={chuyen}>
            <Image source={require('../images/avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
          </Pressable>
          <View>
            <Text style={{ fontWeight: "bold", marginLeft: 10 }}>phucvvph34858@fpt.edu.vn</Text>
            <Text style={{ fontStyle: "italic", marginLeft: 10 }}>đang online</Text>
          </View>
        </View>
        {/* HIỂN THỊ NỘI DUNG TIN NHẮN Ở ĐÂY  */}
        <FlatList
          style={styles.noidung}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.message}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
        <View style={styles.nhaptinnhan}>
          <TextInput
            placeholder='nhập tin nhắn ở đây'
            style={{ height: 50, width: "85%", backgroundColor: "#aaaa", borderRadius: 20, paddingHorizontal: 10 }}
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={sendMessage}
          />
          <Pressable onPress={sendMessage}>
            <Image source={require('../images/send.png')} style={{ width: 40, margin: 7, height: 40, borderRadius: 30 }} />
          </Pressable>
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
    alignItems: 'center',
    padding: 10
  },
  noidung: {
    flex: 1
  },
  message: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e1e1e1',
    borderRadius: 5,
    marginHorizontal: 10
  }
})
