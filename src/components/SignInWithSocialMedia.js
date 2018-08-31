import React from 'react';
import { Link } from 'react-router-dom';
// import FacebookSignInButton from './FacebookSignInButton';


class SignInWithSocialMedia extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="stack-screen socialmedia-connect-screen">
               <div>
                <Link to="/authentication">
                    <button className="close-icon">&times;</button>
                </Link>
               </div>
               <div>
                   <div className="house-graphic-container">
                   <img src="http://res.cloudinary.com/dejyp5iex/image/upload/v1534953341/graphique-maison_oebfhb.png" />
                   </div>
               </div>
               <div className="socialmedia-connect-screen__buttons-container">
                {/* <FacebookSignInButton/> */}
                <button className="authentication__button socialmedia-connect-screen__facebook-connect-button"><i class="fab fa-facebook-square"></i> KONEKTE AK FACEBOOK</button>
                <div className="socialmedia-connect-screen__buttons-container-2">
                <Link className="socialmedia-connect-screen__link" to="/authentication/sign-in-without-social-media">
                    <button className="socialmedia-connect-screen__sign-in-button">
                    KONEKTE
                    </button>
                </Link>
                <Link className="socialmedia-connect-screen__link" to="/authentication/account-creation">
                    <button className="socialmedia-connect-screen__create-account-button"> 
                        KREYE KONT OU
                    </button>
                </Link>
                </div>
               </div>
            </div>
            
        )
    }
}


export default SignInWithSocialMedia;
