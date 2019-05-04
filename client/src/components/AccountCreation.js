import React from 'react';
import { Link } from 'react-router-dom';

import { graphql,Mutation } from 'react-apollo';
import { ACCOUNT_CREATION } from '../queries/queries';

import Upload from './Upload';

import Loading from './Loading';
import Error from './Error';
import notify from '../utils/notify';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as yup from 'yup';


const style={
    errors:{
        height:"50px",
        backgroundColor:"rgba(255,0,0,0.1)",
        color:"#999",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}

// TypeError: yupError.inner is undefined
const schema=yup.object().shape({
    firstName: yup.string("Prenon se yon tèks").required("Prenon se yon chan obligatwa"),
    lastName: yup.string("Non se yon tèks").required("Non se yon chan obligatwa"),
    email:yup.string("Imèl se yon tèks").email().required("Imèl se yon chan obligatwa"),
    phone1:yup.number(),
    password:yup.string().min(8,"Paswod ou dwe o mwen 8 karate").required("Modpas se yon chan obligatwa"),
    passwordConfirm:yup.string().required("Konfime Modpas la")
    .oneOf([yup.ref('password'), null],"Paswod yo pa menm")
})

class AccountCreation extends React.Component{

        // constructor(props){
        //    
                        //     isFetchingFromCloudinary=false;
                        //     this.setState({
                        //         isFetchingFromCloudinary
                        //     })

                        //     const returnedResponse=await res.json();
                        //     console.log(JSON.stringify(returnedResponse));
                        //     this.setState({
                        //         profilePicture:returnedResponse.secure_url
                        //     })
                        //     }else{
                        //         this.setState({
                        //             profilePicture:null,
                        //             profilePictureIsLoaded:false
                        //         })
                        //     }
                            
                        //     // const profilePicture="asdf.com"
                        //     const { email,password,firstName,lastName,phone1,profilePicture,isFormValid,profilePictureIsLoaded }=this.state;
                        //     // alert(isFormValid);
                        //     if(isFormValid){
                        //     signup({ 
                        //         variables: { email:email,password:password,firstName:firstName,lastName:lastName,phone1:phone1,profilePicture:profilePicture},
                        //         update:(store,{data:{signup}})=>{this.props.history.push('/profile')}
                        //     })
                        //     }else{
                        //         // alert("Mwen rantre nan else la")
                        //         if(profilePictureIsLoaded==false){
                        //             notify("OU DWE CHWAZI ON FOTO PWOFIL","error");
                        //         }else{
                        //             notify("OU DWE RANPLI TOUT CHAN YO","error");
                        //         }
                        //     }
                        // }} super(props)
        //     this.handleChange=this.handleChange.bind(this);
        //     this.state={
        //         isFetchingFromCloudinary:false,
        //         isFormValid:false,
        //         email:null,
        //         firstName:null,
        //         lastName:null,
        //         phone1:null,
        //         profilePicture:"",
        //         profilePictureIsLoaded:false,
        //         password:null,
        //         passwordsAreEqual:false
        //     }
        // }

        // handleChange(event,name) {

        //     if(!Array.isArray(event)){
        //     const target = event.target;
        //     const value = target.type === 'checkbox' ? target.checked : target.value;
        //     const name = target.name;
            
        //     this.setState({
        //         [name]: value
        //       },()=>{
        //           const { password,passwordConfirmation }=this.state
        //           const passwoqrdsAreEqual=(password!==null && passwordConfirmation!==null)&&(passwordConfirmation===password);
       
        //           this.setState({
        //               passwordsAreEqual
        //           })     
        //       });
        //     const { email,password,firstName,lastName,phone1,profilePictureIsLoaded }=this.state;

        //     if(email!==null && password!==null && firstName!==null && lastName !== null && phone1 !== null && profilePictureIsLoaded!==false){
        //         this.setState({
        //             isFormValid:true
        //         })
        //     }

        //    }else{

        //     const profilePictureIsLoaded=event.length>0 ? true : false;

        //     this.setState({
        //         profilePicture:event[0],
        //         profilePictureIsLoaded
        //     })
        //     const { email,password,firstName,lastName,phone1 }=this.state;

        //     if(email!==null && password!==null && firstName!==null && lastName !== null && phone1 !== null && profilePictureIsLoaded!==false){
        //         this.setState({
        //             isFormValid:true
        //         })
        //     }
        //    }

           

        // }

        state={
            profilePicture:""
        }

        handleProfileImage=(event,name)=>{
            this.setState({
                [name]:event[0]
            })
        }
    

        render(){

            const { profilePicture }=this.state;

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

                        onSubmit={(values,{isSubmitting})=>{
                            const finalValues={...values,profilePicture}
                            console.log(finalValues)
                        }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        touched,
                        errors,
                        values
                    })=>(
                        <div className="stack-screen account-creation-screen">
                        <Link to="/authentication/sign-in-methods"> 
                            <button className="close-icon">&times;</button>
                        </Link>
                        <form 
                            onSubmit={ handleSubmit }
                            // onSubmit={ async (e) =>{
                            // e.preventDefault();
                            // if(!this.state.passwordsAreEqual) return;
                            // const  file=this.state.profilePicture;
                            // if(file){

                            // const data=new FormData();
                            // data.append('file',file);
                            // data.append('upload_preset','lakayou');
                            // let isFetchingFromCloudinary=true;
                            // this.setState({
                            //     isFetchingFromCloudinary
                            // })
                            // let res=null;
                            // try {
                            // res=await fetch("https://api.cloudinary.com/v1_1/dejyp5iex/image/upload",{
                            // method:'POST',
                            // body:data
                            // });
                            // }catch(error){
                            //     this.setState({
                            //         isFetchingFromCloudinary:'error'
                            //     })
                            //         return;
                            // }
                        
                        //     isFetchingFromCloudinary=false;
                        //     this.setState({
                        //         isFetchingFromCloudinary
                        //     })

                        //     const returnedResponse=await res.json();
                        //     console.log(JSON.stringify(returnedResponse));
                        //     this.setState({
                        //         profilePicture:returnedResponse.secure_url
                        //     })
                        //     }else{
                        //         this.setState({
                        //             profilePicture:null,
                        //             profilePictureIsLoaded:false
                        //         })
                        //     }
                            
                        //     // const profilePicture="asdf.com"
                        //     const { email,password,firstName,lastName,phone1,profilePicture,isFormValid,profilePictureIsLoaded }=this.state;
                        //     // alert(isFormValid);
                        //     if(isFormValid){
                        //     signup({ 
                        //         variables: { email:email,password:password,firstName:firstName,lastName:lastName,phone1:phone1,profilePicture:profilePicture},
                        //         update:(store,{data:{signup}})=>{this.props.history.push('/profile')}
                        //     })
                        //     }else{
                        //         // alert("Mwen rantre nan else la")
                        //         if(profilePictureIsLoaded==false){
                        //             notify("OU DWE CHWAZI ON FOTO PWOFIL","error");
                        //         }else{
                        //             notify("OU DWE RANPLI TOUT CHAN YO","error");
                        //         }
                        //     }
                        // }}                    
                        className="account-creation-screen__form">
                            {/* {(loading || (this.state.isFetchingFromCloudinary!=='error' && this.state.isFetchingFromCloudinary==true))?<Loading/>:""}
                            {(error || this.state.isFetchingFromCloudinary==='error')?notify('GEN ON EREU ANPECHE NOU KREYE KONT OU A. REESEYE YON LOT FWA.',"error"):""}  */}
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Foto Pwofil</label>
                                <Upload name="profilePicture" numberOfImagesAllowed={1} handleImage={(event,name)=>{this.handleProfileImage(event,name)}} />
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Non</label>
                                <input name="lastName" placeholder="Tanpri mete non ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={ values.lastName }
                                    type="text" 
                                    className="account-creation-screen__input"
                                />
                            </div>
                            <div className="errors" style={errors.lastName?style.errors:null}>
                                {errors.lastName}
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Prenon</label>
                                <input name="firstName" placeholder="Tanpri mete prenon ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur }
                                    onSubmit={ handleSubmit } 
                                    value={ values.firstName }
                                    type="text" 
                                    className="account-creation-screen__input"
                                />
                            </div>
                            <div className="errors" style={errors.firstName?style.errors:null}>
                                {errors.firstName}
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
                            </div>
                            <div className="errors" style={errors.phone1?style.errors:null}>
                                {errors.phone1}
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Imèl</label>
                                <input name="email" placeholder="Tanpri mete imèl ou " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={ values.email }
                                    type="email"
                                     className="account-creation-screen__input" 
                                required/>
                            </div>
                            <div className="errors" style={errors.email?style.errors:null}>
                                {errors.email}
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Modpas</label>
                                <input 
                                    name="password" 
                                    placeholder="Chwazi yon paswòd" 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={ values.password }
                                    type="password" 
                                    className="account-creation-screen__input"
                                />
                            </div>
                            <div className="errors" style={errors.password ? style.errors : null}>
                                {errors.password}
                            </div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Konfime Modpas</label>
                                <input 
                                    name="passwordConfirm" 
                                    placeholder="Konfime modpas ou fenk mete a " 
                                    onChange={ handleChange } 
                                    onBlur={ handleBlur } 
                                    onSubmit={ handleSubmit }
                                    value={ values.passwordConfirm }
                                    type="password" className="account-creation-screen__input" 
                                />
                            </div>
                            <div className="errorsz" style={errors.passwordConfirm?style.errors:null}>
                                {errors.passwordConfirm}
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

