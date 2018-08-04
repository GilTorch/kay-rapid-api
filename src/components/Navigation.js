import React from 'react';
import NavigationButton from './NavigationButton';


const Navigation=()=>{
    return(
        <nav className="navigation-menu">
          <ul>
              <li><NavigationButton name="home" size="2x"/></li>
              {/* <li><NavigationButton name="home" size={2x}/></li>
              <li><NavigationButton name="user" size={2x}/></li> */}
          </ul>
        </nav>
    )
}


export default Navigation;