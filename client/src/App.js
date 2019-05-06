import React, { Component } from 'react';
import './css/App.css';

import { ApolloProvider } from 'react-apollo';
import  client,{persistor} from './apolloClient';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faHome, faHeart, faUser, faMapMarkerAlt, faVideo,faArrowCircleLeft,faCamera,faTrash,faEye,faEyeSlash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import SignInWithoutSocialMedia from './components/SignInWithoutSocialMedia';
import SignInMethods from './components/SignInMethods';
import AccountCreation from './components/AccountCreation';

import Profile from './page/Profile';
import Favorites from './page/Favorites';
import Home  from './page/Home';

import AddHouse from './components/AddHouse';
import WallHouse from './components/WallHouse';
import RequestPassword from './components/RequestPassword';

import "./css/normalize.css";
import "./css/base.css";
import RequestPasswordRedirection from './components/RequestPasswordRedirection';
import { ToastContainer } from 'react-toastify';


require('dotenv').config()


library.add(faSearch,faHome, faHeart, faUser,faMapMarkerAlt,faVideo,faArrowCircleLeft,faCamera,faTrash,faEye,faEyeSlash,faCheckCircle)


class App extends Component {

    constructor(props) {
    super(props)
    this.state = {
      restored: false,
    }
  }

  componentDidMount() {
    persistor.restore()
      .then(() => this.setState({ restored: true }))
  }

  render() {
    if(!this.state.restored){
      return <div><p>Loading!</p></div>
    }else{
      return (
        <ApolloProvider client={client}>
          <ToastContainer autoClose={1200}/>
          <Router>
            <React.Fragment>
              <Route exact={true} path="/" component={Home}/>
              <Route exact={true} path="/profile" component={Profile}/>
              <Route exact={true} path="/favorites" component={Favorites}/>
              <Route exact={true} path="/authentication/sign-in-methods" component={SignInMethods} updateCacheWithToken={this.updateCacheWithToken}/>
              <Route exact={true} path="/authentication/sign-in-without-social-media" component={SignInWithoutSocialMedia}/>
              <Route exact={true} path="/authentication/account-creation" component={AccountCreation}/>
              <Route exact={true} path="/add-house" component={AddHouse}/>
              <Route exact={true} path="/walls-house" component={WallHouse}/>
              <Route exact={true} path="/authentication/sign-in-without-social-media/forgot-password" component={RequestPassword}/>
              <Route exact={true} path="/authentication/sign-in-without-social-media/forgot-password-redirection" component={RequestPasswordRedirection}/>
            </React.Fragment>
          </Router>
        </ApolloProvider>
      )    ;
    }

  }
}

export default App;
