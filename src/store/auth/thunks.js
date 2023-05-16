import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { chekingCredentials, login, logout } from "./";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );


    }
};

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );

        const result =  await signInWithGoogle();
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result  ) );

    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async( dispatch ) => {

        dispatch( chekingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });


        if( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ) );

        
    }

}; 

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async( dispatch ) => {

        dispatch( chekingCredentials() );

        const result = await loginWithEmailPassword({ email, password });

        if( !result.ok ) return dispatch( logout( result ));

        dispatch( login( result ) );
    }
    
};

export const startLogout = () => {

    return async( dispatch ) => {

        await logoutFirebase()
        dispatch( clearNotesLogout() );
        dispatch( logout() );


    }

};