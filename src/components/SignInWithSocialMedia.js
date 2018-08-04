import React from 'react';
import { Link } from 'react-router-dom';


class SignInWithSocialMedia extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div ref="signInWithSocialMedia" className="card authentication__signin-with-socialmedia">
               <Link to="/authentication">
                <button className="close-icon">&times;</button>
               </Link>
               <button className="authentication__button facebook-connect-button">KONEKTE AK FACEBOOK</button>
               <Link to="/authentication/sign-in-without-social-media">
                <button className="authentication__button sign-in-button">KONEKTE</button>
               </Link>
               <Link to="/authentication/account-creation">
                <button className="authentication__button create-account-button">KREYE KONT OU </button>
               </Link>
            </div>
            
        )
    }
}


export default SignInWithSocialMedia;
