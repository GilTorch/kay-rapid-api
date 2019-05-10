import React from 'react';
import Close from './Close';
import { Mutation } from 'react-apollo';
import { RESET_PASSWORD } from '../queries/queries';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import notify from '../utils/notify';
import queryString from 'query-string';

class RequestPasswordRedirection extends React.Component{

    state={
        password:null,
        confirmPassword:null,
        isEqual:false,
        resetToken:null
    }

    handleChange=(event)=>{
        const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            
            this.setState({
              [name]: value
            },()=>{
                const { password,confirmPassword }=this.state
                const isEqual=(password!==null && confirmPassword!==null)&&(confirmPassword===password);
     
                this.setState({
                    isEqual
                })     
            });
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({
            resetToken:values.resetToken
        })
    }

   render(){
    return(
        <Mutation mutation={RESET_PASSWORD}>
        {(resetPassword,{loading,error})=>(
            <div className="stack-screen request-password-stack-screen">
            <Link to="/profile">
                <button className="close-icon">&times;</button>
            </Link>
            <form className="request-password-stack-screen__form" onSubmit={(e)=>{
                e.preventDefault();
                if(this.state.isEqual){
                    resetPassword({variables:{ resetToken:this.state.resetToken,password:this.state.password,passwordConfirm:this.state.confirmPassword },
                        update:()=>{notify('MODPAS OU AN CHANJE. KOUNYA WAP KA KONEKTE SAN PWOBLEM',"success");this.props.history.push('/profile')}
                    })

                }
            }}>
                <h2>Chwazi yon nouvo modpas</h2>
                <input className="request-password-stack-screen__input" onChange={this.handleChange} name="password" type="password" placeholder="Rantre nouvo paswod ou vle genyen an" required/>
                <input style={{marginTop:"10px"}} className="request-password-stack-screen__input" onChange={this.handleChange} name="confirmPassword" type="password" placeholder="Konfime nouvo paswod la" required/>
                <button className="success-button request-password-stack-screen__button" type="submit">VOYE'L ALE</button>
                {!this.state.isEqual?<p style={{color:"red"}}>Ou dwe ekri menm password la nan tou 2 chan yo.</p>:""}
                {(loading)?<Loading/>:""}
                {(error)?notify("GEN ON TI ERE KI PASE.REESEYE ON LOT MOMAN","error"):""}
            </form>
            </div>
        )}   
        </Mutation>
    )
   }
}

export default RequestPasswordRedirection;