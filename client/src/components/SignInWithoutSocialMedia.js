import React from 'react';
import { Link } from 'react-router-dom';

const SignInWithoutSocialMedia=()=>{

    return(
    <div className="stack-screen signin-without-socialmedia-screen">
        <Link to="/authentication/sign-in-with-social-media">
            <button className="close-icon">&times;</button>
        </Link>
        <form className="signin-without-socialmedia-screen__form">
            <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Imèl</label><input type="email" placeholder="Tanpri mete imel ou" className="signin-without-socialmedia-screen__input"/></div>
            <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Paswòd</label><input type="password" placeholder="Tanpri mete passwòd ou" className="signin-without-socialmedia-screen__input"/></div>
            <div className="signin-without-socialmedia-screen__form-group"><button className="authentication__button signin-without-socialmedia-screen__button" type="submit">KONEKTE</button></div>
        </form>
    </div>
        
    )
}


export default SignInWithoutSocialMedia;



