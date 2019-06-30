import React from 'react';
import "../css/error.css";
import styled from 'styled-components';
import { renderToStringWithData } from 'react-apollo';
import { toast } from 'react-toastify';

const ErrorStyles = styled.div`
    display:flex;
    width:100%;
    height:50px;
    background-color:rgba(255,0,0,0.1);
    color:rgba(255,0,0,0.8);
    justify-content:center;
    align-items:center;
`


class Error extends React.Component {

    state = {
        closed: false
    }

    setClosed = (val) => {
        this.setState({
            closed: val
        })
    }

    render() {
        const { closed } = this.state;

        return (
            <ErrorStyles>
                {this.props.children || (<p>Gen on ti erè. Reeseye apre yon ti moman.</p>)}
            </ErrorStyles>
        )
    }
}

export default Error;