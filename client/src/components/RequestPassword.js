import React from 'react';
import Close from './Close';

import { REQUEST_PASSWORD_TOKEN } from '../queries/queries.js';
import { Mutation } from 'react-apollo';
import notify from '../utils/notify';

import Loading from './Loading';
import { ToastContainer,toast } from 'react-toastify';

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
        toast.dismiss();
    }


    render(){
        return(
            <Mutation mutation={ REQUEST_PASSWORD_TOKEN } >
            {(requestPasswordToken,{loading,error})=>(
                <div className="stack-screen request-password-stack-screen">
                <Close whereToGo="/authentication/sign-in-without-social-media"/>
                <form className="request-password-stack-screen__form"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        requestPasswordToken({variables:{email:this.state.email},
                            update:()=>{
                                toast.success("VERIFYE IMEL OU.",{
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
                {error?notify("GEN ON EREU KONEKSYON KI PASE. VERIFYE KONEKSYON ENTENET LA","error"):""}
                <ToastContainer/>
                </div>
            )}
            </Mutation>
        )
    }
}

export default RequestPassword;