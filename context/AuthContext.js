"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem("firebaseToken");
    setUser(null);
  };



 const apiRequest = async (type, endpoint, data) => {
  const { auth } = require('@/services/firebase');

  try {
    if (type === 'fetch') {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } 
    else if (type === 'login') {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("firebaseToken", token);
      return userCredential.user;
    }
    else if (type === 'register') {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("firebaseToken", token);
      return userCredential.user;
    }
    else if (type === 'posts') {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      return data.slice(0, 9); 
    }
    else {
      throw new Error('Invalid request type');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};




  return (
    <AuthContext.Provider value={{ user, handleLogout, apiRequest }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
