import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { app } from "./firebase.config"

export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) =>{
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin =() =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const signout =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, currentUser =>{
           setUser(currentUser)
           setLoading(false)
        })
        return ()=>{
            return unsubscribed;
        }
    },[])

    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        signout
    }
    return(
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
        
    )
};
export default AuthProvider;