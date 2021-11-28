import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';
import tw from 'tailwind-rn';
import { AntDesign, Entypo, Ionicons} from "@expo/vector-icons";



const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false,
  });
 }, []);

  return (
    <SafeAreaView>
      <View style={tw('flex-row items-center justify-between px-5')}>
        <TouchableOpacity onPress={logout}>
          <Image style={tw('h-10 w-10 rounded-full')} source={{ uri: user.photoURL }}
          />

        </TouchableOpacity>

     

      <TouchableOpacity>
        <Image
          source={require('../tinder-logo.png')}
          style={tw('h-14 w-14')}
        
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Ionicons name='chatbubbles-sharp' size={30} color="#FF5864"/>
      </TouchableOpacity>
      </View>
      {/* <Text>Heeee</Text>
      <Button title="Go to chat screen" onPress={() => 
      navigation.navigate("Chat")
      }
      />

      <Button title="log out" onPress={logout}/> */}
    </SafeAreaView>
  )
}

export default HomeScreen
