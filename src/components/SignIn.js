import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
        <div className="card signin-card">
            <div className="signin-card__wrapper">
                <p> Konekte kounya pou ou ka genyen yon pi bon eksperyans.</p>
                <Link to="/authentication/sign-in-with-social-media">
                    <button className="authentication__button signin-card__button">KONEKTE</button>
                </Link>
            </div>
        </div>
        )
    }
}

export default SignIn;