import React from 'react';
import "../css/error.css";
import styled from 'styled-components';


const ErrorStyles = styled.div`
    display:flex;
    width:100%;
    height:50px;
    background-color:rgba(255,0,0,0.1);
    color:rgba(255,0,0,0.8);
    justify-content:center;
    align-items:center;
`


const Error = props => {

    return (
        <ErrorStyles>
            {props.children || (<p>Gen on ti erè. Reeseye apre yon ti moman.</p>)}
        </ErrorStyles>
    )

}

export default Error;