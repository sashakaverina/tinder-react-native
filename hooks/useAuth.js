import React, { createContext } from 'react'
import { View, Text } from 'react-native'

const AuthContext = createContext({

});

export const AuthProvider = ( { children }) => {
  return (
    <AuthContext.Provider value={{
      user: null
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
  return useContent(AuthContext);
}