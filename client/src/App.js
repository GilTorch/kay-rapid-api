import React, { Component } from 'react';
import './css/App.css';

import { ApolloProvider } from 'react-apollo';
import  client,{persistor} from './apolloClient';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faHome, faHeart, faUser, faMapMarkerAlt, faVideo,faArrowCircleLeft,faCamera,faTrash,faEye,faEyeSlash, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import SignIn from './components/SignIn';
import SignInMethods from './components/SignInMethods';
import SignUp from './components/SignUp';
import Profile from './page/Profile';
import Favorites from './page/Favorites';
import Home  from './page/Home';
import AddHouse from './components/AddHouse';
import WallHouse from './components/WallHouse';
import RequestPassword from './components/RequestPassword';
import infoHouse from './components/HouseDetails';
import RequestPasswordRedirection from './components/RequestPasswordRedirection';
import "./css/normalize.css";
import "./css/base.css";


require('dotenv').config()


library.add(faSearch,faHome, faHeart, faUser,faMapMarkerAlt,faVideo,faArrowCircleLeft,faCamera,faTrash,faEye,faEyeSlash,faCheckCircle,faPlus)

window.alert = toast;


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
              <Route exact={true} path="/houses/:id/details" component={infoHouse} />
              <Route exact={true} path="/authentication/signin-methods" component={SignInMethods} updateCacheWithToken={this.updateCacheWithToken}/>
              <Route exact={true} path="/authentication/signin" component={SignIn}/>
              <Route exact={true} path="/authentication/signup" component={SignUp}/>
              <Route exact={true} path="/add-house" component={AddHouse}/>
              <Route exact={true} path="/walls-house" component={WallHouse}/>
              <Route exact={true} path="/authentication/forgot-password" component={RequestPassword}/>
              <Route exact={true} path="/authentication/forgot-password-redirection" component={RequestPasswordRedirection}/>
            </React.Fragment>
          </Router>
        </ApolloProvider>
      )    ;
    }

  }
}

export default App;
