import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '0', text: 'Chào bạn, tôi có thể giúp gì được cho bạn?', position: 'left' }
  ]);
  const flatListRef = useRef(null); // Ref để scroll tới cuối danh sách tin nhắn

  const chuyen = () => {
    navigation.navigate("Profile");
  }

  const back = () => {
    navigation.goBack();
  }

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = { id: `temp_${messages.length}`, text: message, position: 'right' };
      setMessages(prevMessages => [...prevMessages, newMessage]); // Thêm tin nhắn từ người dùng vào danh sách
      setMessage('');
      scrollToBottom(); // Cuộn tới tin nhắn mới nhất sau khi gửi

      try {
        // Gửi tin nhắn từ người dùng lên server inputGPT
        const response = await fetch('http://192.168.53.101:3005/inputGPT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: message }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Lấy dữ liệu từ server để hiển thị tin nhắn được trả về từ endpoint outputgpt
        const responseJson = await fetch('http://192.168.53.101:3006/outputgpt');
        if (!responseJson.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await responseJson.json();
        const replyMessage = data.output || 'Xin lỗi, tôi không hiểu câu hỏi của bạn.';
        const newReply = { id: `server_${messages.length}`, text: replyMessage, position: 'left' };
        setMessages(prevMessages => [...prevMessages, newReply]); // Thêm tin nhắn trả lời từ server vào danh sách
        scrollToBottom();
      } catch (error) {
        console.error('There was an error with the fetch operation:', error);
      }
    }
  }

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }

  const renderMessage = ({ item }) => {
    return (
      <View style={[styles.messageContainer, { justifyContent: item.position === 'right' ? 'flex-end' : 'flex-start' }]}>
        <View style={[styles.messageBubble, { backgroundColor: item.position === 'right' ? '#e1e1e1' : '#b0e0e6' }]}>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Pressable onPress={back}>
            <Image source={require('../images/back.png')} style={styles.icon} />
          </Pressable>

          <Pressable onPress={chuyen}>
            <Image source={require('../images/nguoidung.png')} style={[styles.icon, { borderRadius: 30 }]} />
          </Pressable>
          <View>
            <Text style={styles.headerText}>phucvvph34858@fpt.edu.vn</Text>
            <Text style={styles.subHeaderText}>đang online</Text>
          </View>
        </View>

        <FlatList
          ref={flatListRef}
          style={styles.messageList}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Nhập tin nhắn ở đây...'
            style={styles.textInput}
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={sendMessage}
          />
          <Pressable onPress={sendMessage}>
            <Image source={require('../images/send.png')} style={styles.sendButton} />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center'
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  headerText: {
    fontWeight: "bold",
  },
  subHeaderText: {
    fontStyle: "italic",
  },
  messageList: {
    flex: 1,
    padding: 10
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  textInput: {
    height: 50,
    width: "85%",
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
  }
});
