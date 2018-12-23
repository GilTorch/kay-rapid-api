import React from 'react';
import { Link } from 'react-router-dom';

import { graphql,Mutation } from 'react-apollo';
import { ACCOUNT_CREATION } from '../queries/queries';

import Upload from './Upload';

import Loading from './Loading';

class AccountCreation extends React.Component{

        constructor(props){
            super(props)
            this.handleChange=this.handleChange.bind(this);
            this.handleProfilePicture=this.handleProfilePicture.bind(this);
            // this.submitForm=this.submitForm.bind(this);
            console.log(props);
        }

        componentDidMount(){
            console.log("console.log is working");
        }
        
    //     async submitForm(e){

    //         e.preventDefault();
    //         alert("called");

    //       const  file=this.state.profilePicture;
    //       const data=new FormData();
    //        data.append('file',file);
    //        data.append('upload_preset','lakayou');

    //        const res=await fetch("https://api.cloudinary.com/v1_1/dejyp5iex/image/upload",{
    //            method:'POST',
    //            body:data
    //        })

    //        const returnedResponse=await res.json();
    //        console.log(JSON.stringify(returnedResponse));
    //         this.setState({
    //             profilePicture:returnedResponse.secure_url
    //         })
    //         const { email,password,firstName,lastName,phone1,profilePicture }=this.state;
    //         const { signup }=this.props;

    //        signup({ 
    //             variables: { email:email,password:password,firstName:firstName,lastName:lastName,phone1:phone1,profilePicture:profilePicture},
    //             update:(store,{data:{signup}})=>{this.props.history.push('/profile')}
    //     })
    // }

        handleChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
        }
    
       handleProfilePicture(file){
           // alert("Here is the file!"+file);

           this.setState({
               profilePicture:file
           })
           
        }

        render(){

            // const { handleChange }=this;

            return(
                <Mutation mutation={ ACCOUNT_CREATION }>
                {(signup,{loading,error})=>(
                        <div className="stack-screen account-creation-screen">
                        <Link to="/authentication/sign-in-with-social-media"> 
                            <button className="close-icon">&times;</button>
                        </Link>
                        <form onSubmit={ async (e) =>{
                            e.preventDefault();
                            // const  file=this.state.profilePicture;
                            // const data=new FormData();
                            // data.append('file',file);
                            // data.append('upload_preset','lakayou');

                            // const res=await fetch("https://api.cloudinary.com/v1_1/dejyp5iex/image/upload",{
                            // method:'POST',
                            // body:data
                            // })

                            // const returnedResponse=await res.json();
                            // console.log(JSON.stringify(returnedResponse));
                            // this.setState({
                            //     profilePicture:returnedResponse.secure_url
                            // })
                            // const profilePicture="asdf.com"
                            const { email,password,firstName,lastName,phone1,profilePicture }=this.state;

                            signup({ 
                                variables: { email:email,password:password,firstName:firstName,lastName:lastName,phone1:phone1,profilePicture:"asdfasd.com"},
                            })
                        }}                    
                        className="account-creation-screen__form">
                            {(loading)?<Loading/>:""}
                            {(error)?<p><b>Gen on ti ere ki pase...</b></p>:""} 
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Non</label>
                                <input name="lastName" placeholder="Tanpri mete non ou " onChange={this.handleChange} type="text" className="account-creation-screen__input"  required/></div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Prenon</label>
                                <input name="firstName" placeholder="Tanpri mete prenon ou " onChange={this.handleChange} type="text" className="account-creation-screen__input" required/></div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Nimewo telefòn</label>
                                <input name="phone1" placeholder="Tanpri mete nimewo telefòn ou " onChange={this.handleChange} type="number" className="account-creation-screen__input" required/></div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Imèl</label>
                                <input name="email" placeholder="Tanpri mete imèl ou " onChange={this.handleChange} type="email" className="account-creation-screen__input" required/></div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Paswòd</label>
                                <input name="password" placeholder="Chwazi yon paswòd  " onChange={this.handleChange} type="password" className="account-creation-screen__input" required/></div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Foto Pwofil</label>
                                <Upload numberOfImagesAllowed={1} handleImage={(file)=>{this.handleProfilePicture(file)}} /></div>
                            <div className="account-creation-screen__form-group">
                                <label className="account-creation-screen__label">Konfime Paswòd</label>
                                <input name="passwordConfirmation" placeholder="Konfime paswòd ou fenk mete a " onChange={this.handleChange} type="password" className="account-creation-screen__input" required/></div>
                            <div className="account-creation-screen__form-group">
                                <button className="auth-button success-button" type="submit">KREYE KONT LAN</button></div>
                        </form>
                    </div>)       
                }
                </Mutation>
              )
        }
}

export default AccountCreation;


// const AccountCreation = ()=>{

//     let emailInput;
//     let firstNameInput;
//     let lastNameInput
//     let phoneInput;
//     let passwordInput;

//     return(
//      <Mutation mutation={ ACCOUNT_CREATION }>
//         {
//             (signup, {loading,error}) =>(

//             <div className="stack-screen account-creation-screen">
//                 <Link to="/authentication/sign-in-with-social-media"> 
//                     <button className="close-icon">&times;</button>
//                 </Link>
//                 <form  
//                    className="account-creation-screen__form"

//                    onSubmit={e => {
//                       e.preventDefault();
//                       signup({ variables: { email: emailInput.value, password: passwordInput.value,firstName: firstNameInput.value, lastName: lastNameInput.value, phone1: phoneInput.value,profilePicture:"asdfsdf.com"} });
//                       emailInput.value = "";
//                       firstNameInput.value = "";
//                       lastNameInput.value = "";
//                       phoneInput.value = "";
//                       passwordInput.value = "";
//                     }}
//                   >
//                     <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Non</label><input placeholder="Tanpri mete non ou " type="text" className="account-creation-screen__input" ref={node => {firstNameInput = node;}} required/></div>
//                     <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Prenon</label><input placeholder="Tanpri mete prenon ou " type="text" className="account-creation-screen__input" ref={node => {lastNameInput = node;}} required/></div>
//                     <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Nimewo telefòn</label><input placeholder="Tanpri mete nimewo telefòn ou " type="number" className="account-creation-screen__input" ref={node => {phoneInput = node;}} required/></div>
//                     <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Imèl</label><input placeholder="Tanpri mete imèl ou " type="email" className="account-creation-screen__input" ref={node => {emailInput = node;}}/></div>
//                     <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Paswòd</label><input placeholder="Chwazi yon paswòd  " type="password" className="account-creation-screen__input" ref={node => {passwordInput = node;}} required/></div>
//                     <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Konfime Paswòd</label><input placeholder="Konfime paswòd ou fenk mete a " type="password" className="account-creation-screen__input"  required/></div>
//                     <div className="account-creation-screen__form-group"><button className="authentication__button signin-without-socialmedia-screen__button" type="submit">KREYE KONT LAN</button></div>
//                     {(loading)?<p><b>Fon ti tann...</b></p>:""}
//                     {(error)?<p><b>Gen on ti ere ki pase...</b></p>:""}
//                 </form>
//             </div>

//               )
//         }
         
//      </Mutation>
        
//     )
// }


// export default AccountCreation;
