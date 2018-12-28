import React from 'react';
import Close from './Close';

class RequestPasswordRedirection extends React.Component{

    state={
        password:null,
        confirmPassword:null,
        isEqual:false
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

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.equal){
            console.log("sent to server")
        }

    }

   render(){
    return(
        <div className="stack-screen request-password-stack-screen">
            <Close whereToGo="/profile"/>
            <form className="request-password-stack-screen__form" onSubmit={this.handleSubmit}>
                <h2>Chwazi yon nouvo modpas</h2>
                <input className="request-password-stack-screen__input" onChange={this.handleChange} name="password" type="password" placeholder="Rantre nouvo paswod ou vle genyen an" required/>
                <input style={{marginTop:"10px"}} className="request-password-stack-screen__input" onChange={this.handleChange} name="confirmPassword" type="password" placeholder="Konfime nouvo paswod la" required/>
                <input className="success-button request-password-stack-screen__button" type="submit" value="VOYE'L ALE"/>
                {!this.state.isEqual?<p style={{color:"red"}}>Ou dwe ekri menm password la nan tou 2 chan yo.</p>:""}
            </form>
        </div>
    )
   }
}

export default RequestPasswordRedirection;