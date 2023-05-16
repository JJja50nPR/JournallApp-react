import { loginWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { chekingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('pruebas en AuthThunks', () => { 

    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de invocar el chekingCredentials', async() => { 

        await checkingAuthentication()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );

     });

     test('startGoogleSignIn debe de llamar chekingCredentials y login - Exito', async() => { 

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );


      });

     test('startGoogleSignIn debe de llamar chekingCredentials y logout - Error', async() => { 

        const loginData = { ok: false, errorMessage: 'Un error en Google' };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );


      });

      test('startLoginWithEmailPassword debe de llamar a chekingCredentials y login - Exito', async() => { 

         const loginData = { ok: true, ...demoUser };
         const formData = { email : demoUser.email, password : '123456' };

         await loginWithEmailPassword.mockResolvedValue( loginData );
         await startLoginWithEmailPassword( formData )( dispatch );

         expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
         expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

       })




 });