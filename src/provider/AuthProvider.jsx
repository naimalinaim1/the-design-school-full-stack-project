import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../system/firebase/firebase.config";

export const AuthContent = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // firebase system
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // user login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const userLogout = () => {
    signOut(auth);
  };

  // get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const email = user?.email;
      if (email && user?.photoURL) {
        const data = {
          email,
          image: user?.photoURL,
          name: user?.displayName,
          role: "student",
        };

        fetch(`https://final-project-12-server.vercel.app/users`, {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(() => {});
      }
      setLoading(false);
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUser,
    userLogout,
    userLogin,
    googleLogin,
  };

  return (
    <AuthContent.Provider value={authInfo}>{children}</AuthContent.Provider>
  );
};

export default AuthProvider;
