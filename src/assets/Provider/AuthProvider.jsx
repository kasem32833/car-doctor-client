import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase.config";




export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

const createUser = (email, password) =>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

const logIn = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}


useEffect(()=>{
 const unsubscriber =  onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    console.log('current user', currentUser)
    setLoading(false);
  });
  return ()=>{
   return unsubscriber()
  }
},[])

  const authInfo = {
    createUser,
    logIn,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
