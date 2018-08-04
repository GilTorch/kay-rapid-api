import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import client from './ApolloClient';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import  Home  from './page/Home';
import  Authentication from './components/Authentication';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SignInWithSocialMedia from './components/SignInWithSocialMedia';
import SignInWithoutSocialMedia from './components/SignInWithoutSocialMedia';
import AccountCreation from './components/AccountCreation';



class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path="/authentication" component={Authentication}/>
          <Route exact={true} path="/authentication/sign-in-with-social-media" component={SignInWithSocialMedia}/>
          <Route exact={true} path="/authentication/sign-in-without-social-media" component={SignInWithoutSocialMedia}/>
          <Route exact={true} path="/authentication/account-creation" component={AccountCreation}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
