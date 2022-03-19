import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Homescreen</Text>
      <Button title={'Go to chat'} onPress={() => navigation.navigate('Chat')} />
    </View>
  )
}

export default HomeScreen;