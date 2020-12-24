import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../Style/SignIn.css';
import { continueWithGoogle, initializeLoginFramework } from './AuthManager';

const SignIn = () => {

    initializeLoginFramework();
    
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
   

    const googleSignIn = () =>{
      
        continueWithGoogle().then(res=>{
            const user = res;
            if(user.isLogin){
                 history.replace(from);
            }
        })
    }


    return (
        <div className="utilize-login">
            <div className='login-page'>
                 <h2 className='login-with'>Login With</h2>
                 <div className="google" role='button'><span className='continue-google'>Continue with Google</span></div>
            </div>
        </div>
    );
};

export default SignIn;