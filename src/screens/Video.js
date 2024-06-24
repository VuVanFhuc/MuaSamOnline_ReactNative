import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'

const Video = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://youtube.com/shorts/uIoHYGr_MTk?si=tWQHQgDKGrxm8trq' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  )
}

export default Video

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
