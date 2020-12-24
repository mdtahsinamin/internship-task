import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import '../Style/SignIn.css';
import { addJwtToken, continueWithGoogle, initializeLoginFramework } from './AuthManager';

const SignIn = () => {

    initializeLoginFramework();
    
    const [loginUser,setLoginUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
   

    const googleSignIn = () =>{
      
        continueWithGoogle().then(res=>{
            const googleUser = {...loginUser,...res};
            setLoginUser(googleUser);
            if(googleUser.isLogin){
                 addJwtToken();
                 history.replace(from);
            }
        })
    }

    return (
        <div className="utilize-login">
            <div className='login-page'>
                 <h2 className='login-with'>Login With</h2>
                 <div className="google" role='button' onClick={googleSignIn}><span className='continue-google'>Continue with Google</span></div>
            </div>
        </div>
    );
};

export default SignIn;