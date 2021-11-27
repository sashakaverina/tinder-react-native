import React from 'react'
import { View, Text } from 'react-native'
import StackNavigator from '../StackNavigator'
import { NavigationContainer } from '@react-navigation/native'

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default HomeScreen
