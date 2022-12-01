import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
// import { useQuery } from '@tanstack/react-query';
// import Loading from './../Components/Loading/Loading';

export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [userData, setUserData] =  useState([])


    // useEffect(()=>{
    //     fetch(`https://flip-phone-server-towhid7667.vercel.app/users?email=${user.email}`)
    //     .then(res => res.json())
    //     .then(data => setUserData(data))
    // },[])

   


    const  createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    } 
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false)
            });
    
            return ()=> unsubscribe();
        }, [])
    
        // const {data : userData = [], isLoading} = useQuery({
        //     queryKey : ['userData'],
        //     queryFn: async () => {
        //         const res = await fetch(`https://flip-phone-server-towhid7667.vercel.app/users?email=${user.email}`, {
        //             headers:{
        //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
        //             }
        //         })
        //         const data = await res.json();
        //         return data
        //     }
        // })
        // if(isLoading){
        //     return <Loading></Loading>
        // }
    
        const authInfo = {
            createUser,
            signIn,
            user,
            logOut,
            updateUser,
            loading,
            
        }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default UserContext;