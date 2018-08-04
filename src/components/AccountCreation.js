import React from 'react';
import { Link } from 'react-router-dom';


class AccountCreation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
                <div className="card authentication__account-creation">
                <Link to="/authentication/sign-in-with-social-media">
                <button className="close-icon">&times;</button>
            </Link>
            <form>
                <div className="authentication__form-group"><label>Non</label><input type="text"/></div>
                <div className="authentication__form-group"><label>Prenon</label><input type="text"/></div>
                <div className="authentication__form-group"><label>Nimewo Telefòn</label><input type="number"/>
</div>
                <div className="authentication__form-group"><button className="authentication__button create-account-button" type="submit">KREYE KONT LAN</button></div>
            </form>
          </div>
            
        )
    }
}


export default AccountCreation;
