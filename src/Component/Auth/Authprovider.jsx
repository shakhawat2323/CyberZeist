import { Children, createContext, useEffect, useState } from "react";
import auth from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loding, setLoading] = useState(true);

  const Usercrate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Loginuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateProfil = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      console.log(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authinfo = {
    user,
    loding,
    Usercrate,
    Loginuser,
    updateProfil,
    Logout,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
