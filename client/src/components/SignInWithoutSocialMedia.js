import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { AUTH_WITHOUT_SOCIAL_MEDIA } from '../queries/queries';



class SignInWithoutSocialMedia extends React.Component{


    signUserIn(e){
        e.preventDefault();
        // console.log("Email:"+this.refs.email.value+",password:"+this.refs.password.value);
        const email = this.emailInput.value;
        const password= this.passwordInput.value;
         this.props.signIn({
            variables:{email,password},
            update:(store,{data:{login}})=>{
                console.log(login);
            }
        })
        
    }
 
    render(){
    return(
    <div className="stack-screen signin-without-socialmedia-screen">
        <Link to="/authentication/sign-in-with-social-media">
            <button className="close-icon">&times;</button>
        </Link>
        <form onSubmit={this.signUserIn.bind(this)} className="signin-without-socialmedia-screen__form">
            <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Imèl</label><input ref={(node)=>{this.emailInput=node}} type="email" placeholder="Tanpri mete imel ou" className="signin-without-socialmedia-screen__input"/></div>
            <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Paswòd</label><input ref={(node)=>{this.passwordInput=node}} type="password" placeholder="Tanpri mete passwòd ou" className="signin-without-socialmedia-screen__input"/></div>
            <div className="signin-without-socialmedia-screen__form-group"><button className="authentication__button signin-without-socialmedia-screen__button" type="submit">KONEKTE</button></div>
        </form>
    </div>
    )
}
}



export default graphql(
    AUTH_WITHOUT_SOCIAL_MEDIA,
    {name:"signIn"}
)(SignInWithoutSocialMedia);



