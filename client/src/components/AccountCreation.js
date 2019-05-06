import React from 'react';
import { Link } from 'react-router-dom';
import { graphql,Mutation } from 'react-apollo';
import { ACCOUNT_CREATION } from '../queries/queries';
import  uploadImage from '../utils/uploadImageToFileServer'
import ImageSelect from './ImageSelect';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from './Loading';

const style={
    errors:{
        width:"100%",
        height:"50px",
        backgroundColor:"rgba(255,0,0,0.1)",
        color:"rgba(255,0,0,0.8)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        correct:{
            color:"green"
        }
    },
    passwordContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        passwordInput:{
            height:"30px"
        },
        iconContainer:{
            width:"20%",
            height:"28px",
            borderTop:"1px solid #bbb",
            borderRight:"1px solid #bbb",
            borderBottom:"1px solid #bbb",
            backgroundColor:"#eee",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }
    }
}

// TypeError: yupError.inner is undefined
const schema=yup.object().shape({
    firstName: yup.string("Prenon se yon tèks").required("Prenon se yon chan obligatwa"),
    lastName: yup.string("Non se yon tèks").required("Non se yon chan obligatwa"),
    email:yup.string("Imèl se yon tèks").email("Sa w mete a pa yon imèl").required("Imèl se yon chan obligatwa"),
    phone1:yup.number(),
    password:yup.string().min(8,"Paswod ou dwe o mwen 8 karate").required("Modpas se yon chan obligatwa"),
    passwordConfirm:yup.string().required("Konfime Modpas la")
    .oneOf([yup.ref('password'), null],"Paswod yo pa menm")
})

class AccountCreation extends React.Component{

        state={
            profilePicture:null,
            password:{
                type:"password",
                hidden: true,
                visibleIcon:"eye"
              },
              passwordConfirm:{
                type:"password",
                hidden: true,
                visibleIcon:"eye"
              }
        }

        handleProfileImage=(event,name)=>{
            this.setState({
                [name]:event[0]
            })
        }
    

        handlePasswordVisibleState=(passwordField)=>{
            const hidden = !this.state[passwordField].hidden;
            this.setState({
                [passwordField]:{
                type: hidden ? "password" : "text",
                hidden,
                visibleIcon: hidden ? "eye" : "eye-slash"
                }
            })
        }

        isCorrect=(fieldName,touched,errors)=>{
            return (errors[fieldName] === undefined && touched[fieldName]) ? <FontAwesomeIcon style={style.input.correct} icon="check-circle" />:null
        }

        render(){

            const { profilePicture,password,passwordConfirm }=this.state;
            const { handleProfileImage,handlePasswordVisibleState,isCorrect}=this;

            return(
                <Mutation mutation={ ACCOUNT_CREATION }>
                {(signup,{ loading,error })=>(
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            firstName:"",
                            lastName:"",
                            email:"",
                            phone1:"",
                            password:"",
                            passwordConfirm:""
                        }}

                        onSubmit={async (values, { setSubmitting }) => {

                            let profilePicture=this.state.profilePicture;
                            if(profilePicture){
                                await uploadImage([profilePicture],"profilePicture",(label,response)=>{
                                profilePicture=response.secure_url;
                                })
                            }

                            signup({ 
                                variables: { email:values.email,password:values.password,firstName:values.firstName,lastName:values.lastName,phone1:values.phone1,profilePicture:profilePicture},
                                update:(store,{data:{signup}})=>{this.props.history.push('/profile')}
                            })

                            setSubmitting(false)

                          }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        touched,
                        errors,
                        values,
                        isSubmitting
                    })=>(
                        <div className="stack-screen account-creation-screen">
                        <Link to="/authentication/sign-in-methods"> 
                            <button className="close-icon">&times;</button>
                        </Link>
                        { isSubmitting ? <Loading/> : null }
                        <form onSubmit={ handleSubmit } className="account-creation-screen__form">
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Foto Pwofil</label>
                                <ImageSelect 
                                    name="profilePicture" 
                                    numberOfImagesAllowed={1} 
                                    handleImage={(event,name)=>{handleProfileImage(event,name)}} 
                                />
                            </div>
                            <div style={style.formGroup} className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">
                                    Non {isCorrect("lastName",touched,errors)}
                                </label>
                                <input name="lastName" placeholder="Tanpri mete non ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={ values.lastName }
                                    type="text" 
                                    className="account-creation-screen__input"
                                />
                                <div className="errors" style={errors.lastName?style.errors:null}>
                                    {errors.lastName}
                                </div>
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">
                                    Prenon {isCorrect("firstName",touched,errors)}
                                </label>
                                <input name="firstName" placeholder="Tanpri mete prenon ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur }
                                    onSubmit={ handleSubmit } 
                                    value={ values.firstName }
                                    type="text" 
                                    className="account-creation-screen__input"
                                />
                                <div className="errors" style={errors.firstName?style.errors:null}>
                                    {errors.firstName}
                                </div>
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Nimewo telefòn</label>
                                <input name="phone1" placeholder="Tanpri mete nimewo telefòn ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={values.phone1}
                                    type="number"
                                    className="account-creation-screen__input"
                                />
                                <div className="errors" style={errors.phone1?style.errors:null}>
                                    {errors.phone1}
                                </div>
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">
                                    Imèl {isCorrect("email",touched,errors)}
                                </label>
                                <input name="email" placeholder="Tanpri mete imèl ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={ values.email }
                                    type="email"
                                     className="account-creation-screen__input" 
                                />
                                <div className="errors" style={errors.email?style.errors:null}>
                                    {errors.email}
                                </div>
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">
                                    Modpas {isCorrect("password",touched,errors)}
                                </label>
                                <div style={style.passwordContainer}>
                                    <input 
                                        type={password.type}
                                        style={style.passwordContainer.passwordInput}
                                        name="password" 
                                        placeholder="Chwazi yon paswòd" 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur } 
                                        onSubmit={ handleSubmit }
                                        value={ values.password }
                                        className="account-creation-screen__input"
                                    />
                                    <span 
                                        onClick={()=>handlePasswordVisibleState("password")} 
                                        style={style.passwordContainer.iconContainer}>
                                        <FontAwesomeIcon icon={password.visibleIcon}/>
                                    </span>
                                </div>
                                 <div className="errors" style={errors.password ? style.errors : null}>
                                    {errors.password}
                                </div>  
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">
                                    Konfime Modpas {isCorrect("passwordConfirm",touched,errors)}
                                </label>
                                <div style={style.passwordContainer}>
                                    <input 
                                        type={passwordConfirm.type}
                                        style={style.passwordContainer.passwordInput}
                                        name="passwordConfirm" 
                                        placeholder="Chwazi yon paswòd" 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur } 
                                        onSubmit={ handleSubmit }
                                        value={ values.passwordConfirm }
                                        className="account-creation-screen__input"
                                    />
                                    <span 
                                        onClick={()=>handlePasswordVisibleState("passwordConfirm")} 
                                        style={style.passwordContainer.iconContainer}>
                                        <FontAwesomeIcon icon={passwordConfirm.visibleIcon}/>
                                    </span>
                                </div>
                                 <div className="errors" style={errors.passwordConfirm ? style.errors : null}>
                                    {errors.passwordConfirm}
                                </div>  
                            </div>
                            <div className="account-creation-screen__form-group">
                                <button id="create-account-button" className="auth-button success-button" type="submit">KREYE KONT LAN</button>
                            </div>
                        </form>
                    </div>                        
                    )}
                    </Formik>
                    )       
                }
                </Mutation>
              )
        }
}

export default AccountCreation;

