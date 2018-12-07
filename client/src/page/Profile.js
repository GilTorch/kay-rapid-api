import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import Authentication from '../components/Authentication';

import { graphql } from 'react-apollo';
import { READ_AUTH_INFO } from '../queries/queries';
import UserInfo from '../components/UserInfo';

import { withRouter } from 'react-router-dom';

import "../css/profile.css";

import notify from '../utils/notify';
import { ToastContainer } from 'react-toastify';



class Profile extends React.Component{
    
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    
    // }

    render(){

        const {userAuthInfo}=this.props;
    
        let componentToRender;

        if(userAuthInfo.email){
            notify('OU KONEKTE',"success")
            componentToRender=<UserInfo {...userAuthInfo} />
        }else{
            notify('OU DEKONEKTE',"error")
            componentToRender=<Authentication/>
        }

    return(
        <div>
            <HeaderBar title="Pwofil Ou"/>
            {componentToRender}
            <Navigation currentPage="profile"/>
            <ToastContainer autoClose={3000}/>
        </div>
    )
    }
}  

const ProfileWithQuery=graphql(
    READ_AUTH_INFO,{
        props:({data:{ userAuthInfo }})=>({
            userAuthInfo
        })
    }
)(Profile)


export default withRouter(ProfileWithQuery) ;