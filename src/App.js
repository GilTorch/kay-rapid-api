import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import SignInWithoutSocialMedia from './components/SignInWithoutSocialMedia';
import SignInWithSocialMedia from './components/SignInWithSocialMedia';
import AccountCreation from './components/AccountCreation';


import Profile from './page/Profile';
import Favorites from './page/Favorites';
import Home  from './page/Home';


library.add(faSearch,faHome, faHeart, faUser)


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/profile" component={Profile}/>
          <Route exact={true} path="/favorites" component={Favorites}/>
          <Route exact={true} path="/authentication/sign-in-with-social-media" component={SignInWithSocialMedia}/>
          <Route exact={true} path="/authentication/sign-in-without-social-media" component={SignInWithoutSocialMedia}/>
          <Route exact={true} path="/authentication/account-creation" component={AccountCreation}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
