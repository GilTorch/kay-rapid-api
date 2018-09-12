import React from 'react';
import CardHouses from './components/wallsHouse';
import './css/App.css';
import './css/carousel.css';
import './css/infoHouse.css';
import './css/wallHouse.css';



class App extends React.Component {
  
  render() {
    return (
      <div>
        <CardHouses />
      </div>
    )
  }
}

export default App;
