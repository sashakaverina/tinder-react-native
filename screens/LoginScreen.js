import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';
import tw from 'tailwind-rn';

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <View style={tw('flex-1')}>
      <ImageBackground
        resizeMode="cover"
        style={tw('flex-1')}

        source={{ uri: "http://tinder.com/static/tinder.png"}}
        >
          <TouchableOpacity style={[tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"), { marginHorizontal: '25%'}]} onPress={signInWithGoogle}>
             <Text style={tw('text-center font-semibold')}>Sign in and get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen
