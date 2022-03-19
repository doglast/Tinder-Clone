import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './views/stacks/StackNavigator';
import { AuthProvider } from './hook/userAuth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>

  )
}
