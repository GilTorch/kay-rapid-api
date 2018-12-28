import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { FB_AUTH, WRITE_AUTH_INFO } from '../queries/queries';
import { graphql,compose,Mutation, renderToStringWithData } from 'react-apollo';
import HouseIllustration from '../svg/houses-sunshine-green-pasture.svg';
import Loading from './Loading';
// import notify from '../utils/notify';
import { ToastContainer,toast } from 'react-toastify';


class SignInWithSocialMedia extends React.Component{
    
    _isMounted=null
    
    componentDidMount(){
        this._isMounted=true;
    }

    componentWillUnmount(){
        this._isMounted=false;
    }

    notify=(message,type)=>{

        toast[type](message, {
          position: toast.POSITION.BOTTOM_CENTER
        });

        console.log("THE TOAST ID BEFORE UNMOUNT:"+this.toastId);
    
      }

    dismissAll = () => toast.dismiss()

    render(){
       const {writeUserAuthInfoToCache, history}=this.props;
        return(
            <Mutation mutation={FB_AUTH} >
                {(authenticateFBUser,{loading,error})=>(
                <div className="stack-screen socialmedia-connect-screen">
                <div>
    
                <Link to="/profile">
                    <button className="close-icon">&times;</button>
                </Link>
                </div>
                <div>
                    <div className="house-graphic-container">
                        <img className="house-illustration" src={HouseIllustration}/>
                    </div>
                </div> 
                <div className="socialmedia-connect-screen__buttons-container">
                <FacebookLogin 
                    appId="266227067534365"
                    autoLoad={false}
                    callback={(facebookResponse)=>{
    
                        authenticateFBUser({ 
                            variables: { facebookToken: facebookResponse.accessToken },
                            update:(store,{data:{authenticateFBUser}})=>{
                                let token = authenticateFBUser.token;
                                let firstName = authenticateFBUser.user.firstName;
                                let lastName=authenticateFBUser.user.lastName;
                                let email=authenticateFBUser.user.email;
                                let profilePicture=facebookResponse.picture.data.url;
                                let userObject = {token,firstName,lastName,email,profilePicture};
                        
                                writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }})
                            }
                          }).then(()=>history.push('/profile'))
    
                }}
                    fields="name,email,picture"
                    icon="fa fa-facebook"
                    textButton=" KONEKTE AK FACEBOOK"
                    cssClass="socialmedia-connect-screen__facebook-connect-button"
                /> 
                <div className="socialmedia-connect-screen__buttons-container-2">
                <Link className="socialmedia-connect-screen__link" to="/authentication/sign-in-without-social-media">
                    <button className="socialmedia-connect-screen__sign-in-button">
                    KONEKTE
                    </button>
                </Link>
                <Link className="socialmedia-connect-screen__link" to="/authentication/account-creation">
                    <button className="socialmedia-connect-screen__create-account-button"> 
                        KREYE KONT OU
                    </button>
                </Link>
                </div>
                </div>
                {this._isMounted ?<ToastContainer autoClose={200}/>:""}
                {(loading)?<Loading/>:""}
            {(error)?this.notify("GEN ON TI ERE KI PASE. TESTE KONEKSYON ENTENET OU EPI REESEYE ON LOT MOMAN","error"):""}
            </div> 
            )}
            </Mutation>
            ) 
    }
}


export default compose(
     graphql(WRITE_AUTH_INFO,{name:"writeUserAuthInfoToCache"})
)(SignInWithSocialMedia);




