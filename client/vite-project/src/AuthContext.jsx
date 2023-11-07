import { createContext, useEffect, useState } from "react";
import { provider } from "./firebase";
import firebase from "firebase/compat/app";
import axios from "axios";
import "firebase/compat/auth";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      setCurrentUser(result.user);
      const payload = {
        userName: result.user.multiFactor.user.displayName,
        email: result.user.multiFactor.user.email,
      };
      axios.post("//localhost:4000/update/user", { payload });
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    currentUser,
    signInWithGoogle,
    signOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
