import React from 'react';
import Close from './Close';

import { REQUEST_PASSWORD_TOKEN } from '../queries/queries.js';
import { Mutation } from 'react-apollo';
import Loading from './Loading';
import "../css/request-password.css";

class RequestPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:null
        }
    }

    handleChange=(event)=>{
        const email=event.target.value;
        this.setState({
            email
        })
    }

    componentWillUnmount(){
        alert.dismiss();
    }


    render(){
        const { history }=this.props;
        return(
            <Mutation mutation={ REQUEST_PASSWORD_TOKEN } >
            {(requestPasswordToken,{loading,error})=>(
                <div className="stack-screen request-password-stack-screen">
                <Close history={history}/>
                <form className="request-password-stack-screen__form"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        requestPasswordToken({variables:{email:this.state.email},
                            update:()=>{
                                alert.success("VERIFYE IMEL OU.",{
                                    autoClose:2500
                                })
                            }
                        })
                    }}
                >
                    <input onChange={this.handleChange} className="request-password-stack-screen__input" type="email" placeholder="Rantre im&egrave;l ou" required/>
                    <input type="submit" className="success-button request-password-stack-screen__button" value="VOYEL' ALE"/>
                </form>
                {loading?<Loading/>:""}
                {error?alert.error("GEN ON ERÈ  KONEKSYON KI PASE. VERIFYE KONEKSYON ENTENET LA"):""}
                </div>
            )}
            </Mutation>
        )
    }
}

export default RequestPassword;