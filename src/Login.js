import React from 'react';
import "./Login.css"

import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Login() {
       const [state , dispatch] = useStateValue();

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
        .then(result=> {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => alert(error.message))
    };

    
    return (
        <div className="login">
            <div className="login__logo">

              <img className="image1" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                     alt="" />
               <img className="image2" src=" https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"  
                 alt=""    />
               
             </div>
             <form className="form" >
             <input placeholder="Username/email" type="text"  />
             <input placeholder="Password" type="password"    />
          

             </form>
             <div className="button" >
             <Popup trigger={<button className="btn1" type="submit"  > Sign In

                  </button>}>
                  <div>Sorry, Only Sign With Google Is Available Right Now!</div>
                  </Popup>
                  <button className="btn" type="submit" onClick={signInWithGoogle}> Sign In With Google
                  </button>
  
             </div> 
             
             
        </div>
    )
}

export default Login
