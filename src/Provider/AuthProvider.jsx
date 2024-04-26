import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()

    const handleregister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => unsubscribe();
    }, [])

    const info = { user, setUser, handleregister, handleLogin, logOut }
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