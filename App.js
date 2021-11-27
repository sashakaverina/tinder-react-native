import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import tw from 'tailwind-rn';


export default function App() {
  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>Open up App.js to start working on your app!</Text>
       <Button title="Click me"/>
    </View>
  );
}

