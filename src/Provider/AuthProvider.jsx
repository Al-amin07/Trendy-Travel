import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase.config";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleregister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
 



    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
           
        })
        return () => unsubscribe();
    }, [])

    const info = { user, setUser, handleregister, handleLogin, logOut, googleLogin, githubLogin, loading }
    return (
       <AuthContext.Provider value={info}>
        { children }
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;