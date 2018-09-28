import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';




const Favorites=({ title })=>{
    return(
        <div className="favorites">
            <HeaderBar title="Favorites"/>
            <Navigation currentPage="favorites"/>
        </div>
    )
}  ;

export default Favorites;