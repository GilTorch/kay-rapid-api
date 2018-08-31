import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SignInWithSocialMedia from './SignInWithSocialMedia';
import SignInWithoutSocialMedia from './SignInWithoutSocialMedia';
import AccountCreation from './AccountCreation';


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
        <Router>
        <React.Fragment>
          <Route exact={true} path="/authentication" component={SignIn}/>
          <Route exact={true} path="/authentication/sign-in-with-social-media" component={SignInWithSocialMedia}/>
          <Route exact={true} path="/authentication/sign-in-without-social-media" component={SignInWithoutSocialMedia}/>
          <Route exact={true} path="/authentication/account-creation" component={AccountCreation}/>
        </React.Fragment>
      </Router>
        </div>
        )
    }

}


export default Authentication;