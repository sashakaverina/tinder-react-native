import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Image, View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect, useRef } from 'react';
import tw from 'tailwind-rn';
import { AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DATA = [
  {
    firstName: "Donald",
    lastName: "Trump",
    occupation: "Politician",
    photoUrl: "https://media.vanityfair.com/photos/5d0519934950a449d0a8ab2b/4:3/w_949,h_712,c_limit/trump-kiss-lawsuit.jpg",
    age: 75,
    id: 123,
  },
  {
    firstName: "Lady",
    lastName: "Gaga",
    occupation: "Singer",
    photoUrl: "https://www.fashiongonerogue.com/wp-content/uploads/2015/01/lady-gaga-makeup-2015.jpg",
    age: 45,
    id: 456,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    occupation: "Visionary",
    photoUrl: "https://i.pinimg.com/originals/53/9f/e5/539fe5bbde85313cb58dd329c9bdb85e.jpg",
    age: 57,
    id: 678,
  },

]

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false,
  });
 }, []);

  return (
    <SafeAreaView style={tw('flex-1')}>
      <View style={tw('flex-row items-center justify-between px-5')}>
        <TouchableOpacity onPress={logout}>
          <Image style={tw('h-10 w-10 rounded-full')} source={{ uri: user.photoURL }}
          />

        </TouchableOpacity>

     

      <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
        <Image
          source={require('../tinder-logo.png')}
          style={tw('h-14 w-14')}
        
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Ionicons name='chatbubbles-sharp' size={30} color="#FF5864"/>
      </TouchableOpacity>
      </View>
    <View style={tw('flex-1 -mt-6')}>
    <Swiper
    ref={swipeRef} 
    containerStyle={{ backgroundColor: "transparent"}}
    cards={DATA}
    stackSize={5}
    cardIndex={0}
    verticalSwipe={false}
    onSwipedLeft={() => {

    }}
    overlayLabels={{
      left: {
        title: "NOPE",
        style: {
          label: {
            textAlign: "right",
            color: "red",
          },
        },
      },
      right: {
        title: "MATCH",
        style: {
          label: {
            
            color: "#4DED30",
          },
        },
      }
    }}
    animateCardOpacity
      renderCard={card => (
        <View 
        key={card.id} style={tw('relative bg-white h-3/4 rounded-xl')}>
              <Image
              source={{ uri: card.photoUrl}}
              style={tw('absolute top-0 h-full w-full rounded-xl')}
              />
        <View style={[tw('absolute bottom-0 bg-white w-full justify-between px-6 py-2 items-center flex-row h-20 rounded-b-xl'), styles.cardShadow]}>
          <View >
            <Text style={tw('text-xl font-bold')}>{card.firstName} {card.lastName}</Text>
            <Text>{card.occupation}</Text>
          </View>
          <Text style={tw('text-2xl font-bold')}>{card.age}</Text>
          </View>  
        </View>
        )}
        />
        </View>

        <View style={tw('flex flex-row justify-evenly')}>
          <TouchableOpacity 
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw('items-center justify-center rounded-full w-16 h-16 bg-red-200')}>
            <Entypo name="cross" size={24} color="red"/>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => swipeRef.current.swipeRight()}
          style={tw('items-center justify-center rounded-full w-16 h-16 bg-green-200')}>
            <AntDesign name="heart" size={24} color="green"/>
          </TouchableOpacity>
        </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }
})

export default HomeScreen
