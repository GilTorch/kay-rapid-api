import React from 'react';
import './css/App.css';
import './css/carousel.css';
import './css/infoHouse.css';
import './css/wallHouse.css';
import './css/SearchFilterPage.css';
import { SearchFilterPage } from './components/SearchFilterPage';


/*
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import SignInWithoutSocialMedia from './components/SignInWithoutSocialMedia';
import SignInWithSocialMedia from './components/SignInWithSocialMedia';
import AccountCreation from './components/AccountCreation';
import FacebookLoginRedirection from './components/FacebookLoginRedirection';


import Profile from './page/Profile';
import Favorites from './page/Favorites';
import Home  from './page/Home';
*/




/*
library.add(faSearch, faHome, faHeart, faUser)
class App extends Component {

  constructor(props){
    super(props)
  }

  updateCacheWithToken(){
    console.log("called");
  }
=======
import './css/carousel.css';
import './css/infoHouse.css';
import './css/wallHouse.css';
import './css/SearchFilter.css';
import { SearchFilterPage } from './components/SearchFilterPage';
>>>>>>> Stashed changes

  render() {
    return (
<<<<<<< Updated upstream
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <div className="app">
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/profile" component={Profile}/>
            <Route exact={true} path="/favorites" component={Favorites}/>
            <Route exact={true} path="/authentication/sign-in-with-social-media" component={SignInWithSocialMedia} updateCacheWithToken={this.updateCacheWithToken}/>
            <Route exact={true} path="/authentication/sign-in-without-social-media" component={SignInWithoutSocialMedia}/>
            <Route exact={true} path="/authentication/account-creation" component={AccountCreation}/>
            <Route exact={true} path="/redirect-auth" component={FacebookLoginRedirection}/>
            </div>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
      
    )
>>>>>>> Stashed changes
  }
}
*/
class App extends React.Component {
  render() {
    return (
      <div>
        <SearchFilterPage />
      </div>
    )
  }
}
export default App;
