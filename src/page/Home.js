import React from 'react';
import Navigation from '../components/Navigation';
import Neighborhood from '../components/Neighborhood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home=({ title })=>{
    return(
        <div className="home">
            <header className="home__header">
            <div className="home__header-wrapper">
                <img className="app-logo" src="http://res.cloudinary.com/dejyp5iex/image/upload/v1535720361/LAKAY-OU_LOGO_zs0xlj.png" />
                <h1 className="home__title">{ title }</h1>
                <form className="home__form">
                    <div className="home__form-wrapper">
                        <input className="home__input" type="search" placeholder="Tape non vil, komin oswa katye ou vle jwenn kay la..."/>
                        <button className="home__button"><FontAwesomeIcon icon="search"/></button>
                    </div>
                </form>
            </div>
            </header>
            <div className="neighborhood-container">
                <Neighborhood name="Port-au-Prince"/>
                <Neighborhood name="Gonaives"/>
                <Neighborhood name="Cap-Haitien"/>
                <Neighborhood name="Fort-Liberte"/>
                <Neighborhood name="Les Cayes"/>
                <Neighborhood name="Jeremie"/>
            </div>
            <Navigation currentPage="home"/>
        </div>
    )
}  ;

export default Home;