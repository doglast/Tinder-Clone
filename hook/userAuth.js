import React, { createContext, useContext } from 'react';

const AuthContext = createContext({ useContext });

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: 'Douglas' }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);
}