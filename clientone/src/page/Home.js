import React from 'react';
import Navigation from '../components/Navigation';
import Neighborhood from '../components/Neighborhood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppLogo from '../svg/lakay-ou-logo.svg';
import Link from 'react-router-dom/Link';

import "../css/home.css";
import AddHouse from '../svg/add-house-illustration.svg';


const Home=({ title })=>{
    return(
        <div className="home">
            <header className="home__header">
            <div className="home__header-wrapper">
                <img  src={AppLogo} className="home__header-logo" alt="logo" />
                <h1 className="home__title">{ title }</h1>
                <form className="home__form">
                    <div className="home__form-wrapper">
                            <input className="home__input" type="search" aria-label="Search through site content" placeholder="Tape non vil, komin oswa katye ou vle jwenn kay la..."/>
                            
                            <button className="home__button" role="button" aria-hidden="true"><i class="fas fa-search"></i></button>
                            
                    </div>
                </form>
            </div>
            </header>
            <div className="neighborhood-container">
                <Neighborhood name="Pòtoprens"/>
                <Neighborhood name="Gonayiv"/>
                <Neighborhood name="Kap Ayisyen"/>
                <Neighborhood name="Fo Libète"/>
                <Neighborhood name="Okay"/>
                <Neighborhood name="Jeremi"/>
            </div>
            <Link to="/add-house">
                <button className="home__button-post-house">
                    <img src={AddHouse} className="home__add-house-illustration" alt="addHouseserve"/>
                </button>
            </Link>
            <Navigation currentPage="home"/>
        </div>
    )
}  ;

export default Home;