import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import  Authentication from './components/Authentication';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import Home  from './page/Home';
import SignIn from './components/SignIn';
import SignInWithoutSocialMedia from './components/SignIn';
import SignInWithSocialMedia from './components/SignInWithSocialMedia';
import AccountCreation from './components/AccountCreation';

library.add(faSearch,faHome, faHeart, faUser)


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path="/" component={Home}/>
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
