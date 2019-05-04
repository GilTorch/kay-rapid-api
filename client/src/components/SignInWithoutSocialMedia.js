import React from 'react';
import { Link } from 'react-router-dom';
import { graphql,compose,Mutation } from 'react-apollo';
import { AUTH_WITHOUT_SOCIAL_MEDIA,WRITE_AUTH_INFO } from '../queries/queries';

import Loading from './Loading';

import notify from '../utils/notify';
import { ToastContainer,toast } from 'react-toastify';
import { Formik } from 'formik';
import Close from './Close';
import * as yup from 'yup';

const schema=yup.object().shape({
    email:yup.string().email("Ou dwe rantre yon Imèl ").required("Imèl se yon chan obligatwa"),
    password:yup.string().required("Modpas se yon chan obligatwa"),
})


const style={
    errors:{
        height:"50px",
        marginTop:"0",
        backgroundColor:"rgba(255,0,0,0.1)",
        color:"#999",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}

const SignInWithoutSocialMedia=({ writeUserAuthInfoToCache,history})=>{
    return(
            <Mutation mutation={ AUTH_WITHOUT_SOCIAL_MEDIA }>
            {(login,{loading,error})=>(
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        email:"",
                        password:""
                    }}
    
                onSubmit={(values,{isSubmitting})=>{
                    login({
                        variables:{email:values.email,password:values.password},
                        update:(store,{data:{login}})=>{
                            let userObject = {
                                __typename:"UserAuthInfo",
                                id:login.user.id,
                                token:login.token,
                                firstName:login.user.firstName,
                                lastName:login.user.lastName,
                                email:login.user.email,
                                profilePicture:login.user.profilePicture.url
                            };
                            writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }});                           
                        }
                    }).then(()=>{history.push('/profile')})
                }}
            >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                errors,
                touched,
                values
            })=>(
                <div className="stack-screen signin-without-socialmedia-screen">
                    <Close whereToGo="/authentication/sign-in-methods"/>
                    <form 
                        onSubmit={ handleSubmit } 
                        className="signin-without-socialmedia-screen__form"
                    >
                        {(loading)?<Loading/>:""}
                        {(error)? console.log(error.message):""}
                        <div className="signin-without-socialmedia-screen__form-group">
                            <label className="signin-without-socialmedia-screen__label">Imèl</label>
                            <input 
                                name="email" 
                                onChange={ handleChange } 
                                onBlur={ handleBlur }
                                type="email" 
                                placeholder="Tanpri mete imel ou" 
                                className="signin-without-socialmedia-screen__input"
                                value={values.email}
                            />
                        </div>
                        <div className="errors" style={errors.email?style.errors:null}>
                                {errors.email}
                        </div>
                        <div className="signin-without-socialmedia-screen__form-group">
                            <label className="signin-without-socialmedia-screen__label">Modpas</label>
                            <input 
                                name="password" 
                                onChange={ handleChange } 
                                onBlur={ handleBlur } 
                                type="password" 
                                placeholder="Tanpri mete modpas ou" 
                                className="signin-without-socialmedia-screen__input"
                                value={ values.password }
                            />
                        </div>
                        <div className="errors" style={errors.password?style.errors:null}>
                                {errors.password}
                        </div>
                        <div className="signin-without-socialmedia-screen__form-group">
                            <button className="auth-button success-button" type="submit">KONEKTE</button></div>
                        <div className="forgot-password-container">
                            <Link to="/authentication/sign-in-without-social-media/forgot-password">
                                <p>Ou bliye modpas ou?</p>
                            </Link>
                        </div>
                    </form>
                </div> 
            )}
                </Formik>  
            )}
            </Mutation>
    )
}

// class SignInWithoutSocialMedia extends React.Component {

//     state={
//         email:null,
//         password:null
//     }


//     handleChange=(event)=>{
//         const target = event.target;
//             const value = target.type === 'checkbox' ? target.checked : target.value;
//             const name = target.name;
            
//             this.setState({
//               [name]: value
//             });
//     }

//     render(){

//         const { writeUserAuthInfoToCache,history }=this.props;
//         const { email,password }=this.state;

//         return(
//             <Mutation mutation={ AUTH_WITHOUT_SOCIAL_MEDIA }>
//             {(login,{loading,error})=>(
               
//                 <div className="stack-screen signin-without-socialmedia-screen">
//                     <Close whereToGo="/authentication/sign-in-methods"/>
//                     <form onSubmit={(e)=>{
//                         e.preventDefault();
//                         login({
//                             variables:{email:email,password:password},
//                             update:(store,{data:{login}})=>{
//                                 let userObject = {
//                                     __typename:"UserAuthInfo",
//                                     id:login.user.id,
//                                     token:login.token,
//                                     firstName:login.user.firstName,
//                                     lastName:login.user.lastName,
//                                     email:login.user.email,
//                                     profilePicture:login.user.profilePicture.url
//                                 };
//                                 writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }});                           
//                             }
//                         }).then(()=>{history.push('/profile')})
                        
//                     }} className="signin-without-socialmedia-screen__form">
//                         {(loading)?<Loading/>:""}
//                         {(error)? console.log(error.message):""}
//                         <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Imèl</label><input name="email" onChange={this.handleChange} type="email" placeholder="Tanpri mete imel ou" className="signin-without-socialmedia-screen__input" required/></div>
//                         <div className="signin-without-socialmedia-screen__form-group"><label className="signin-without-socialmedia-screen__label">Modpas</label><input name="password" onChange={this.handleChange} type="password" placeholder="Tanpri mete modpas ou" className="signin-without-socialmedia-screen__input" required/></div>
//                         <div className="signin-without-socialmedia-screen__form-group"><button className="auth-button success-button" type="submit">KONEKTE</button></div>
//                         <div className="forgot-password-container">
//                             <Link to="/authentication/sign-in-without-social-media/forgot-password">
//                                 <p>Ou bliye modpas ou?</p>
//                             </Link>
//                         </div>
//                     </form>
//                 </div>   
//             )}
//             </Mutation>
//         )
//     }
   

// }

export default compose(
    graphql(WRITE_AUTH_INFO,{name:"writeUserAuthInfoToCache"})
)(SignInWithoutSocialMedia);




