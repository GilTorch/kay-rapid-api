import React from 'react';
import { Link } from 'react-router-dom';
import { graphql,compose,Mutation } from 'react-apollo';
import { AUTH_WITHOUT_SOCIAL_MEDIA,WRITE_AUTH_INFO } from '../queries/queries';

import Loading from './Loading';


const SignInWithoutSocialMedia = ({ signIn,writeUserAuthInfoToCache,history })=>{

 
    return(
        <Mutation mutation={ AUTH_WITHOUT_SOCIAL_MEDIA }>
        {(login,{loading,error})=>(
           
            <div className="stack-screen signin-without-socialmedia-screen">
                <Link to="/authentication/sign-in-with-social-media">
                    <button className="close-icon">&times;</button>
                </Link>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    // console.log("Email:"+this.rfs.email.value+",password:"+this.refs.password.value);
                    const email = this.emailInput.value;
                    const password= this.passwordInput.value;
                  
                    login({
                        variables:{email:email,password:password},
                        update:(store,{data:{login}})=>{
                            let userObject = {
                                token:login.token,
                                firstName:login.user.firstName,
                                lastName:login.user.lastName,
                                email:login.user.email,
                                profilePicture:login.user.profilePicture.url
                            };
                        
                            writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }})
                            
                        }
                    }).then(()=>{history.push("/profile")})
                    
                }} className="signin-without-socialmedia-screen__form">
                    {(loading)?<Loading/>:""}
                    {error && <p>Gen on erreu :( SVP reseye</p>}
                    <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Imèl</label><input ref={(node)=>{this.emailInput=node}} type="email" placeholder="Tanpri mete imel ou" className="signin-without-socialmedia-screen__input" required/></div>
                    <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Paswòd</label><input ref={(node)=>{this.passwordInput=node}} type="password" placeholder="Tanpri mete passwòd ou" className="signin-without-socialmedia-screen__input" required/></div>
                    <div className="signin-without-socialmedia-screen__form-group"><button className="auth-button success-button" type="submit">KONEKTE</button></div>
                </form>
            </div>   
        )}
        </Mutation>
    )

}



export default compose(
    graphql(AUTH_WITHOUT_SOCIAL_MEDIA,{name:"signIn"}),
    graphql(WRITE_AUTH_INFO,{name:"writeUserAuthInfoToCache"})
)(SignInWithoutSocialMedia);




