import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'

const ModalScreen = () => {
  const {user} = useAuth();
  const [image, setImage] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !occupation || !age;

  return (
    <View style={tw('flex-1 items-center pt-1')}>
      <Image
        style={tw('h-20 w-full')}
        resizeMode="contain"
        source={{ uri: "http://links.papareact.com/2pf"}}
      />

      <Text style={tw('text-xl text-gray-500 p-2 font-bold')}>
        Welcome {user.firstName}
      </Text>

        <Text style={tw('text-center p-4 font-bold text-red-400')}>Step 1: The Profile Pic</Text>
          <TextInput
          value={image}
          onChangeText={text => setImage(text)}
            style={tw('text-center text-xl pb-2')}
            placeholder="Enter a profile pic url"
          />

        <Text style={tw('text-center p-4 font-bold text-red-400')}>Step 1: The Age</Text>
          <TextInput
          value={age}
          onChangeText={text => setAge(text)}
            style={tw('text-center text-xl pb-2')}
            placeholder="Enter you age"
            keyboardType="numeric"
          />

        <Text style={tw('text-center p-4 font-bold text-red-400')}>Step 1: The Occupation</Text>
          <TextInput
         value={occupation}
         onChangeText={text => setOccupation(text)}
            style={tw('text-center text-xl pb-2')}
            placeholder="Enter your occupation"
          />

          <TouchableOpacity style={[tw('w-64 p-3 rounded-xl absolute bottom-10 bg-red-400'), incompleteForm ? tw('bg-gray-400') : tw('bg-red-400')]}
          disabled={incompleteForm}
          >
          
            <Text style={tw('text-center text-white text-xl')}>Update profile</Text>
          </TouchableOpacity>
    </View>
  )
}

export default ModalScreen
