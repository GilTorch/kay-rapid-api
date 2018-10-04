import React from 'react';
import { Link } from 'react-router-dom';
import { graphql,compose } from 'react-apollo';
import { AUTH_WITHOUT_SOCIAL_MEDIA,WRITE_AUTH_INFO } from '../queries/queries';



const SignInWithoutSocialMedia = ({ signIn,writeUserAuthInfoToCache })=>{

    const signUserIn=(e)=>{
        e.preventDefault();
        // console.log("Email:"+this.refs.email.value+",password:"+this.refs.password.value);
        const email = this.emailInput.value;
        const password= this.passwordInput.value;
        signIn({
            variables:{email,password},
            update:(store,{data:{login}})=>{
                let profilePicture = null; 
                let userObject = {
                    token:login.token,
                    firstName:login.user.firstName,
                    lastName:login.user.lastName,
                    email:login.user.email,
                    profilePicture:profilePicture
                };
                console.log("AUTH TO SAVE"+JSON.stringify(userObject));
                writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }})
            }
        })
        
    }
 
    return(
    <div className="stack-screen signin-without-socialmedia-screen">
        <Link to="/authentication/sign-in-with-social-media">
            <button className="close-icon">&times;</button>
        </Link>
        <form onSubmit={signUserIn} className="signin-without-socialmedia-screen__form">
            <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Imèl</label><input ref={(node)=>{this.emailInput=node}} type="email" placeholder="Tanpri mete imel ou" className="signin-without-socialmedia-screen__input"/></div>
            <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Paswòd</label><input ref={(node)=>{this.passwordInput=node}} type="password" placeholder="Tanpri mete passwòd ou" className="signin-without-socialmedia-screen__input"/></div>
            <div className="signin-without-socialmedia-screen__form-group"><button className="authentication__button signin-without-socialmedia-screen__button" type="submit">KONEKTE</button></div>
        </form>
    </div>
    )

}



export default compose(
    graphql(AUTH_WITHOUT_SOCIAL_MEDIA,{name:"signIn"}),
    graphql(WRITE_AUTH_INFO,{name:"writeUserAuthInfoToCache"})
)(SignInWithoutSocialMedia);



