import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Cart from "./src/screens/Cart";
import Profile from "./src/screens/Profile";
import Welcome from "./src/screens/Welcome";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Chat from "./src/screens/Chat";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            console.log(" icon Home ");
            return <Image style={styles.icon} source={require('./src/images/1.png')} />;
          } else if (route.name === "Chat") {
            console.log(" icon Chat ");
            return <Image style={styles.icon} source={require('./src/images/botchat.png')} />;
          } else if (route.name === "Cart") {
            console.log(" icon Cart ");
            return <Image style={styles.icon} source={require('./src/images/3.png')} />;
          }else if (route.name === "Profile") {
            console.log(" icon Profile ");
            return <Image style={styles.icon} source={require('./src/images/0.png')} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'black',
  },
});
