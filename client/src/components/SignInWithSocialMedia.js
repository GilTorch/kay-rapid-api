import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { FB_AUTH, WRITE_AUTH_INFO } from '../queries/queries';
import axios from 'axios';
import { graphql,compose,ApolloConsumer } from 'react-apollo';
import { mkdir } from 'file-system';
import getBase64ImageFromUrl from '../utils/getBase64ImageFromUrl';

const SignInWithSocialMedia=({ sendFBTokenToServer,writeUserAuthInfoToCache, history})=>{
  

    const responseFacebook=(facebookResponse)=>{
        // console.log((facebookResponse.accessToken))
        sendFBTokenToServer({ 
            variables: { facebookToken: facebookResponse.accessToken },
            update:(store,{data:{authenticateFBUser}})=>{
                let token = authenticateFBUser.token;
                let firstName = authenticateFBUser.user.firstName;
                let lastName=authenticateFBUser.user.lastName;
                let email=authenticateFBUser.user.email;
                let profilePicURL=authenticateFBUser.user.profilePicture.url;
                let profilePicture;

                axios.get(profilePicURL)
                .then((response)=>{
                    const data = response.data 
                    profilePicture = data; 
                    let userObject = {token,firstName,lastName,email,profilePicture};
                    console.log("AUTH TO SAVE"+JSON.stringify(userObject));
                    writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }})
                }).then(()=>{console.log("Successfuly saved to the cache")})

                // getBase64ImageFromUrl(profilePicURL)
                //     .then((result)=>{
                //         profilePicture=result;
                //         let userObject = {token,firstName,lastName,email,profilePicture}
                //         console.log("AUTH TO SAVE"+JSON.stringify(userObject));
                //         writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }})
                //     })
                //     .then(()=>{console.log("Successfuly saved to the cache")})
                
            }
          }).then(()=> history.push('/profile'))   
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
                icon="fa fa-facebook"
                textButton=" KONEKTE AK FACEBOOK"
                cssClass="socialmedia-connect-screen__facebook-connect-button"
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

const SignInWithSocialMediaWithMutation = compose(
    graphql( FB_AUTH,{"name":"sendFBTokenToServer"}),
    graphql( WRITE_AUTH_INFO,{"name":"writeUserAuthInfoToCache"})
)(SignInWithSocialMedia)


export default SignInWithSocialMediaWithMutation;