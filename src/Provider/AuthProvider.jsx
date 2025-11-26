import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    
    // const [user,setUser] =useState({

    //     name:'Masum Prodhan',
    //     email:"masum@prodhan003.com"
    // });
   
    const [user, setUser] = useState(null);
    const[loading,setLoading]= useState(true);
    console.log(loading, user)

const createUser = (email,password)=>{
    setLoading
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

const updatedUser = (updateData) =>{
    return updateProfile(auth.currentUser, updateData)
}

const logout = () =>{
   return signOut(auth);
    
}

 useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth,(currenUSer)=>{
        setUser(currenUSer)
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }

 }),[]

    const authData = {
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading,
        updatedUser,
    };

    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;