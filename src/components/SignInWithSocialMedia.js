import React from 'react';
import { Link } from 'react-router-dom';
// import FacebookSignInButton from './FacebookSignInButton';
import FacebookLogin from 'react-facebook-login';
import { Mutation } from 'react-apollo';
import { FB_AUTH } from '../queries/queries';
import {graphql} from 'react-apollo';


const SignInWithSocialMedia=({ mutate,history })=>{
  

    const responseFacebook=(response)=>{
        mutate({ 
            variables: { facebookToken: response.accessToken }
          }).then(()=> history.push('/profile'));
    }

    return(
            <div className="stack-screen socialmedia-connect-screen">
            <div>
            <Link to="/profile">
                <button className="close-icon">&times;</button>
            </Link>
            </div>
            <div>
                <div className="house-graphic-container">
                <img src="http://res.cloudinary.com/dejyp5iex/image/upload/v1534953341/graphique-maison_oebfhb.png" />
                </div>
            </div>
            <div className="socialmedia-connect-screen__buttons-container">
            <FacebookLogin 
            appId="266227067534365"  
            autoLoad={true}
            callback={responseFacebook}
            fields="name,email,picture"
            icon = "fa fa-facebook"
            /> 
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

const SignInWithSocialMediaWithMutation = graphql(
    FB_AUTH
)(SignInWithSocialMedia)


export default SignInWithSocialMediaWithMutation;