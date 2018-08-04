import React from 'react';
import { Link } from 'react-router-dom';

class SignInWithoutSocialMedia extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="card authentication__signin-without-socialmedia">
            <Link to="/authentication/sign-in-with-social-media">
                <button className="close-icon">&times;</button>
            </Link>
            <form>
                <div className="authentication__form-group"><label>Email</label><input type="email"/></div>
                <div className="authentication__form-group"><label>Password</label><input type="password"/></div>
                <div className="authentication__form-group"><button className="authentication__button signin-button" type="submit">KONEKTE</button></div>
            </form>
          </div>
            
        )
    }
}


export default SignInWithoutSocialMedia;



