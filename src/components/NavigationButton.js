import React from 'react';
import Icon from './Icon';


const NavigationButton=({name,size,onButtonClick})=>{
    return(
        <button onClick={onButtonClick}>
            <Icon name={name} size={size}></Icon>
        </button>
    )
}

export default NavigationButton;