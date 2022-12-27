import React, { createContext, useEffect, useState } from "react";
import {app, auth} from '../firebase.config';

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
  const [user,setUser] = useState(null);

  useEffect(()=>{
    auth.onAuthStateChanged(setUser);
  },[]);

  return(
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}

