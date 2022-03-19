import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../Home";
import ChatScreen from "../Chat";
import LoginScreen from "../Login";
import useAuth from "../../hook/userAuth";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {
        user ? (
          <>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Chat' component={ChatScreen} />
          </>
        ) :
          (
            <Stack.Screen name='Login' component={LoginScreen} />
          )
      }
    </Stack.Navigator>)
}

export default StackNavigator;