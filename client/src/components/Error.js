import React from 'react';
import "../css/error.css";
import styled from 'styled-components';
import { renderToStringWithData } from 'react-apollo';
import { toast } from 'react-toastify';

const ErrorStyles = styled.div`
    background-color:pink;
    position: fixed;
    top:0;
    left:0;
    display:${props => props.closed ? 'none' : 'flex'};
    align-items:center;
    justify-content:space-around;
    color:red;
    width:98%;
    height:50px;
    border-radius:3px;
    border: 3px solid red;
`


class Error extends React.Component{
    
    state={
        closed:false
    }

    setClosed=(val)=>{
        this.setState({
            closed:val
        })
    }

    render(){
            const { closed }=this.state;

            return(
                <ErrorStyles closed={closed} onClick={()=>this.setClosed(true)}>
                <span>
                    &times;
                </span>
            {this.props.children || (<p>Gen on ti erè. Reeseye apre yon ti moman.</p>) }
            </ErrorStyles>
        )
    }
}

export default Error;