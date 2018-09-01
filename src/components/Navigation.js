import React from 'react';
import NavigationButton from './NavigationButton';
import { Link, BrowserRouter as Router,Route} from 'react-router-dom';

const Navigation=()=>{

    return(
        <nav className="navigation-bar">
             <React.Fragment>
                <Link to="/">
                    <NavigationButton name="Akey" iconName="home"/>
                </Link>
                <Link to="/favorites">
                    <NavigationButton name="Favori" iconName="heart"/>
                </Link>
                <Link to="/authentication">
                    <NavigationButton name="Pwofil" iconName="user"/>
                </Link>
             </React.Fragment>
        </nav>
    )
}


export default Navigation;