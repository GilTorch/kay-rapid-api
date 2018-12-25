import React from 'react';
import Navigation from '../components/Navigation';
import Neighborhood from '../components/Neighborhood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppLogo from '../svg/lakay-ou-logo.svg';
import Link from 'react-router-dom/Link';

import "../css/home.css";
import AddHouse from '../svg/add-house-illustration.svg';
import { ToastContainer } from 'react-toastify';
import notify from '../utils/notify';
import 'react-toastify/dist/ReactToastify.css';

import { graphql } from 'react-apollo';
import { READ_AUTH_INFO } from '../queries/queries';


class Home extends React.Component{

    constructor(props){
        super(props);
        // this.notify=this.notify.bind(this);
    }


    render(){

       const { title,userAuthInfo }=this.props;

        return(
            <div className="home">
                <header className="home__header">
                <div className="home__header-wrapper">
                    <img  src={AppLogo} className="home__header-logo" />
                    <h1 className="home__title">{ title }</h1>
                    <form className="home__form">
                        <div className="home__form-wrapper">
                            <input className="home__input" type="search" placeholder="Tape non vil, komin oswa katye ou vle jwenn kay la..."/>
                            <button className="home__button"><i className="fas fa-search search-icon"></i></button>
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
                <Link to={userAuthInfo.email?"/add-house":"/profile"}>
                    <button className="home__button-post-house">
                        <img src={AddHouse} className="home__add-house-illustration"/>
                    </button>
                </Link>
                <Navigation currentPage="home"/>
            </div>
        )
    }
}  ;


const HomeWithQuery=graphql(
    READ_AUTH_INFO,{
        props:({data:{ userAuthInfo }})=>({
            userAuthInfo
        })
    }
)(Home)


export default HomeWithQuery;