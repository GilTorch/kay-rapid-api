import React from 'react';
import { Link } from 'react-router-dom';
import { graphql,compose,Mutation } from 'react-apollo';
import { AUTH_WITHOUT_SOCIAL_MEDIA,WRITE_AUTH_INFO } from '../queries/queries';

import Loading from './Loading';

import notify from '../utils/notify';
import { ToastContainer,toast } from 'react-toastify';

import Close from './Close';

class SignInWithoutSocialMedia extends React.Component {

    _isMounted=false;

    constructor(props){
        super(props);
        this.state={
            email:null,
            password:null
        }
    }

    componentidMount(){
        this._isMounted=true;
    }

    componentWillUnmount(){
        this._isMounted=false;
    }

    handleChange=(event)=>{
        const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            
            this.setState({
              [name]: value
            });
    }

    componentWillUnmount(){
        toast.dismiss();
    }
    
    render(){

        const { writeUserAuthInfoToCache,history }=this.props;
        const { email,password }=this.state;

        return(
            <Mutation mutation={ AUTH_WITHOUT_SOCIAL_MEDIA }>
            {(login,{loading,error})=>(
               
                <div className="stack-screen signin-without-socialmedia-screen">
                    <Close whereToGo="/authentication/sign-in-with-social-media"/>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        // console.log("Email:"+this.rfs.email.value+",password:"+this.refs.password.value);                      
                        login({
                            variables:{email:email,password:password},
                            update:(store,{data:{login}})=>{
                                let userObject = {
                                    token:login.token,
                                    firstName:login.user.firstName,
                                    lastName:login.user.lastName,
                                    email:login.user.email,
                                    profilePicture:login.user.profilePicture.url
                                };
                                writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }});                           
                            }
                        }).then(()=>{history.push('/profile')})
                        
                    }} className="signin-without-socialmedia-screen__form">
                        {(loading)?<Loading/>:""}
                        {(error)? notify("GEN ON EREU KI PASE. VERIFYE KONEKSYON ENTENET OU EPI REKOMANSE ON LOT MOMAN","error"):""}
                        <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Imèl</label><input name="email" onChange={this.handleChange} type="email" placeholder="Tanpri mete imel ou" className="signin-without-socialmedia-screen__input" required/></div>
                        <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Paswòd</label><input name="password" onChange={this.handleChange} type="password" placeholder="Tanpri mete passwòd ou" className="signin-without-socialmedia-screen__input" required/></div>
                        <div className="signin-without-socialmedia-screen__form-group"><button className="auth-button success-button" type="submit">KONEKTE</button></div>
                        <div className="forgot-password-container">
                            <Link to="/authentication/sign-in-without-social-media/forgot-password">
                                <p>Ou bliye paswòd ou?</p>
                            </Link>
                        </div>
                        {this._isMounted?<ToastContainer/>:""}
                    </form>
                </div>   
            )}
            </Mutation>
        )
    }
   

}

export default compose(
    graphql(WRITE_AUTH_INFO,{name:"writeUserAuthInfoToCache"})
)(SignInWithoutSocialMedia);




