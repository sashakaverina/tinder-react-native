import { collection, onSnapshot, where } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import tw from 'tailwind-rn'
import useAuth from '../hooks/useAuth';
import { db } from '../firebase';
import { query } from '@firebase/firestore';

const ChatList = () => {
  const [matches, setMatches] = useState();
  const { user } = useAuth();

  useEffect(() => 
    onSnapshot(query(collection(db, 'matches'), where('usersMatched', 'array-contains', user.uid)), 
    (snapshot) => 
    setMatches(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )), [user])

  return 
    matches.length > 0 ? (
    <FlatList
    data={matches}
    keyExtractor={item => item.id}
    />
  ) : (
    <View style={tw('p-5')}>
      <Text style={tw('text-center text-lg')}>No matches at the moment 😢</Text>

    </View>

  );
};

export default ChatList
