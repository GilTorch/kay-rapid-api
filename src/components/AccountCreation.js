import React from 'react';
import { Link } from 'react-router-dom';


class AccountCreation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="stack-screen account-creation-screen">
                <Link to="/authentication/sign-in-with-social-media"> 
                    <button className="close-icon">&times;</button>
                </Link>
                <form className="account-creation-screen__form">
                    <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Non</label><input placeholder="Tanpri mete non ou " type="text" className="account-creation-screen__input"/></div>
                    <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Prenon</label><input placeholder="Tanpri mete prenon ou " type="text" className="account-creation-screen__input"/></div>
                    <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Nimewo telefòn</label><input placeholder="Tanpri mete nimewo telefòn ou " type="number" className="account-creation-screen__input"/></div>
                    <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Imèl</label><input placeholder="Tanpri mete imèl ou " type="email" className="account-creation-screen__input"/></div>
                    <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Paswòd</label><input placeholder="Chwazi yon paswòd  " type="password" className="account-creation-screen__input"/></div>
                    <div className="account-creation-screen__form-group"><label className="account-creation-screen__label">Konfime Paswòd</label><input placeholder="Konfime paswòd ou fenk mete a " type="password" className="account-creation-screen__input"/></div>
                    <div className="account-creation-screen__form-group"><button className="authentication__button signin-without-socialmedia-screen__button" type="submit">KREYE KONT LAN</button></div>
                </form>
            </div>
        )
    }
}


export default AccountCreation;
