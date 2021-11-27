import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import tw from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';


export default function App() {
  return (
    <NavigationContainer>
  
      <AuthProvider>
      <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

