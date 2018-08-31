import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import  Home  from './page/Home';
import  Authentication from './components/Authentication';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)


class App extends Component {
  render() {
    return (
      <div>
      {/* <Authentication/> */}
      <Home title="www.lakayou.com"/>
      </div>
    );
  }
}

export default App;
