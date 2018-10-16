import React from 'react';
import NavigationButton from './NavigationButton';
import { Link, BrowserRouter as Router,Route} from 'react-router-dom';

const Navigation=({ currentPage })=>{

    return(
        <nav className="navigation-bar">
            <Link to="/">
                <NavigationButton highlighted={currentPage=="home"?true:false} name="Akey" iconName="home"/>
            </Link>
            <Link to="/favorites">                                                                                
                <NavigationButton highlighted={currentPage=="favorites"?true:false} name="Favori" iconName="heart"/>
            </Link>
            <Link to="/profile">                                                                                   
                <NavigationButton highlighted={currentPage=="profile"?true:false} name="Pwofil" iconName="user"/>
            </Link>
        </nav>
    )
}


export default Navigation;