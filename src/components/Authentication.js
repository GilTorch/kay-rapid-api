import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SignInWithSocialMedia from './SignInWithSocialMedia';
import SignInWithoutSocialMedia from './SignInWithoutSocialMedia';
import AccountCreation from './AccountCreation';
import HeaderBar from './HeaderBar';
import Navigation from './Navigation';


class Authentication extends React.Component{

    constructor(props){
        super(props);
        this.closeCard=this.closeCard.bind(this);
        // $('.authentication__signin-with-socialmedia').hide();
        // $('.authentication__signin-without-socialmedia').hide();
        // $('.authenctication__account-creation').hide();
        this.state={
            userIsSignedIn:false,
        }
    }


    closeCard(){
        
    }

    render(){
       return(
        <div className="authentication">
          <HeaderBar title="Profile"/>
          <SignIn/>
          <Navigation/>
        </div>
        )
    }

}


export default Authentication;