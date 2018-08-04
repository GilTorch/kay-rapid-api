import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router } from 'react-router-dom';


class Authentication extends React.Component{

    constructor(props){
        super(props);
        this.closeCard=this.closeCard.bind(this);
        // $('.authentication__signin-with-socialmedia').hide();
        // $('.authentication__signin-without-socialmedia').hide();
        // $('.authenctication__account-creation').hide();
        this.state={
            userIsSignedIn:false,
        }
    }


    closeCard(){
        
    }

    render(){
       return(
        <div className="authentication">
            <SignIn/>
{/*           
         
         
          <div className="card authentication__account-creation">
            <button className="close-icon">&times;</button>
            <form>
                <div className="authentication__form-group"><label>Non</label><input type="text"/></div>
                <div className="authentication__form-group"><label>Prenon</label><input type="text"/></div>
                <div className="authentication__form-group"><label>Nimewo Telefòn</label><input type="number"/>
</div>
                <div className="authentication__form-group"><button className="authentication__button create-account-button" type="submit">KREYE KONT LAN</button></div>
            </form>
          </div> */}
        </div>
        )
    }

}


export default Authentication;