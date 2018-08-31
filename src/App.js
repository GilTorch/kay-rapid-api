import React from 'react';
import Header from './component/header.js';
import './css/App.css';
import Slide from './component/carousel.js';
import InfoHouse from './component/infoHouse.js';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header title="Detay"/>
        <Slide />
        <InfoHouse />
      </div>
    )
  }
}

export default App;
