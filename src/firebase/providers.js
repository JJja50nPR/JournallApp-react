import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirabaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( FirabaseAuth, googleProvider );
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok: true,
            // User info
            displayName, email, photoURL, uid

        }
        
        
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        

        return {
            ok: false,
            errorMessage,

        }
        
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirabaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FirabaseAuth.currentUser, { displayName } );

        

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {

       
        return { ok: false, errorMessage: error.message };
        
    }

}

export const loginWithEmailPassword = async({ email, password }) => {

    try {

        const userCredentials = await signInWithEmailAndPassword( FirabaseAuth, email , password );

        const { displayName, photoURL, uid } = userCredentials.user;

        return {
            ok: true,
            displayName, photoURL, uid, email

        }
        
    } catch (error) {

        
        return { ok: false, errorMessage: error.message };
        
    }

    

}

export const logoutFirebase = async() => {

    return await FirabaseAuth.signOut();
    
}