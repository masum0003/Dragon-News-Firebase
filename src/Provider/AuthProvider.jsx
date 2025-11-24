import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    
    // const [user,setUser] =useState({

    //     name:'Masum Prodhan',
    //     email:"masum@prodhan003.com"
    // });
   
    const [user, setUser] = useState(null);
    console.log(user)

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

 useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth,(currenUSer)=>{
        setUser(currenUSer)
    })
    return ()=>{
        unsubscribe();
    }

 }),[]

    const authData = {
        user,
        setUser,
        createUser
    };

    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;