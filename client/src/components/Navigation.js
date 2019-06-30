import React from 'react';
import { Link, BrowserRouter as Router,Route} from 'react-router-dom';
import NavigationButton from './NavigationButton';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavigationStyles = styled.nav`
  width:100%;
  height:60px;
  position:fixed;
  bottom:0;
  left:0;
  background-color:#333;
  color:white;
  font-size:0.8em;
  margin:0;
  display: flex;
  justify-content: space-around;
  align-items:center;
`

const Navigation=({ currentPage })=>{

    return(
        <NavigationStyles>
            <Link to="/">
                <NavigationButton highlighted={currentPage=="home"?true:false} name="Akey" iconName="home"/>
            </Link>
            <Link to="/favorites">                                                                                
                <NavigationButton highlighted={currentPage=="favorites"?true:false} name="Favori" iconName="heart"/>
            </Link>
            <Link to="/profile">                                                                                   
                <NavigationButton highlighted={currentPage=="profile"?true:false} name="Pwofil" iconName="user"/>
            </Link>
        </NavigationStyles>
    )
}


Navigation.propTypes = {
    currentPage: PropTypes.string.isRequired
}

export default Navigation;