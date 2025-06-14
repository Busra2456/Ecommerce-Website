import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null);
      const [loading,setLoading] = useState(true);

      const createUser = (email,password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
      }

      
      const signIn = (email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
      }


      const logOut = () =>{
            setLoading(true);
            return signOut(auth);
      }

      useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth,currenUser =>{
                  const userEmail = currenUser?.email || user?.email;
                  const loggedUser = {email: userEmail};
                  setUser(currenUser);
                  console.log('current user', currenUser);
                  setLoading(false)
            });
                  return () =>{
                        return unsubscribe();
                  }
            },[])

      const authInfo ={
            createUser,
            signIn,
            logOut,
            user,
            loading,

      }
       return (
            <AuthContext.Provider value={authInfo}>
                 {children} 
            </AuthContext.Provider>
      );
};

export default AuthProvider;