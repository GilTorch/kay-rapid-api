import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Favorites from '../svg/navigation/favorites-icon.svg';
import FavoritesHighlighted from '../svg/navigation/favorites-icon-highlighted.svg';
import Home from '../svg/navigation/home-icon.svg';
import HomeHighlighted from '../svg/navigation/home-icon-highlighted.svg';
import Profile from '../svg/navigation/profile-icon.svg';
import ProfileHighlighted from '../svg/navigation/profile-icon-highlighted.svg';

const icons={
    "normal":{
        "favorites":Favorites,
        "home":Home,
        "profile":Profile
    },
    "highlighted":{
        "favorites":FavoritesHighlighted,
        "home":HomeHighlighted,
        "profile":ProfileHighlighted
    }
}

const NavigationButton=({name,iconName,highlighted})=>{
    return(
        <button className={highlighted?iconName+"-icon--hightlighted navigation-button--highlighted":"navigation-button"}>
            <img src={highlighted?icons["highlighted"][iconName]:icons["normal"][iconName]} alt="button"/>
            <span className="navigation-button__title">{name}</span>
        </button>
    )
}

export default NavigationButton;