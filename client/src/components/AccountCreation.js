import React from 'react';
import { Link } from 'react-router-dom';

import {Mutation} from 'react-apollo';
import { ACCOUNT_CREATION } from '../queries/queries';

import Upload from '../components/Upload';

const warningStyle={
    backgroundColor:"green",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const AccountCreation = ()=>{

        let emailInput;
        let firstNameInput;
        let lastNameInput
        let phoneInput;
        let passwordInput;

        return(
         <Mutation mutation={ ACCOUNT_CREATION }>
            {
                (signup, {data}) =>(

                <div className="stack-screen account-creation-screen">
                    {
                        data!==undefined?
                        <div style={{textAlign:"center"}}>KONT OU AN KREYE</div>
                        :""
                    }
                    {/* // <div className="add-house-card__warning-message" style={warningStyle}>
                    //     <span>&times;</span>
                    //     <p>KONT OU KREYE KOUNYA</p>
                    // </div> */}
                    <Link to="/authentication/sign-in-with-social-media"> 
                        <button className="close-icon">&times;</button>
                    </Link>
                    <form  
                       className="account-creation-screen__form"

                       onSubmit={e => {
                          e.preventDefault();
                          signup({ variables: { email: emailInput.value, password: passwordInput.value,firstName: firstNameInput.value, lastName: lastNameInput.value, phone1: phoneInput.value} });
                          emailInput.value = "";
                          firstNameInput.value = "";
                          lastNameInput.value = "";
                          phoneInput.value = "";
                          passwordInput.value = "";
                        }}
                      >
                        <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Non</label><input placeholder="Tanpri mete non ou " type="text" className="account-creation-screen__input" ref={node => {firstNameInput = node;}}/></div>
                        <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Prenon</label><input placeholder="Tanpri mete prenon ou " type="text" className="account-creation-screen__input" ref={node => {lastNameInput = node;}}/></div>
                        <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Nimewo telefòn</label><input placeholder="Tanpri mete nimewo telefòn ou " type="number" className="account-creation-screen__input" ref={node => {phoneInput = node;}}/></div>
                        <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Imèl</label><input placeholder="Tanpri mete imèl ou " type="email" className="account-creation-screen__input" ref={node => {emailInput = node;}}/></div>
                        <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Paswòd</label><input placeholder="Chwazi yon paswòd  " type="password" className="account-creation-screen__input" ref={node => {passwordInput = node;}}/></div>
                        <div><label className="account-creation-screen__label">Foto Pwofil</label><Upload numberOfImagesAllowed={1} /></div>
                        <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Konfime Paswòd</label><input placeholder="Konfime paswòd ou fenk mete a " type="password" className="account-creation-screen__input" /></div>
                        <div className="account-creation-screen__form-group"><button className="auth-button success-button" type="submit">KREYE KONT LAN</button></div>
                    </form>
                </div>

                  )
            }
             
         </Mutation>
            
        )
}


export default AccountCreation;
