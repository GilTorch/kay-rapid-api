import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const NavButtonStyles=styled.button`
  background:transparent;
  cursor: pointer;
  color:${props => props.highlighted ? "#ff9900ff" : "#606060ff" };
  border:none;
  span{
      display:block;
      font-size:1rem;
  }
  svg {
      font-size:1.5rem;
  }
`

const NavigationButton=({name,iconName,highlighted})=>{
    return(
        <NavButtonStyles highlighted={highlighted} >
            <FontAwesomeIcon icon={iconName}/>
            <span>{name}</span>
        </NavButtonStyles>
    )
}

export default NavigationButton;