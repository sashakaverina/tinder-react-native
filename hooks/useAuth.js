import React, { createContext, useContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as Google from "expo-google-app-auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from '@firebase/auth';
import { auth } from '../firebase';
import {REACT_APP_API_KEY} from "@env";


const AuthContext = createContext({

});

const config = {
  iosClientId: REACT_APP_API_KEY,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ( { children }) => {
  const [ error, setError ] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);

      }
      setLoadingInitial(false)
    }), []);

  const logout = () => {
   setLoading(true);
   signOut(auth).catch(error => setError(error))
   .finally(() => setLoading(false))
  }

  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config).then(async (logInResult) => {
      if(logInResult.type === 'success') {
         const { idToken, accessToken } = logInResult;
         const credential = GoogleAuthProvider.credential(idToken, accessToken);
         await signInWithCredential(auth, credential);
      }
      return Promise.reject();
      
    }).catch(error => setError(error))
    .finally(() => setLoading(false));
  };
  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
  return useContext(AuthContext);
}