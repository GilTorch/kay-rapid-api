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

const Profile =({userAuthInfo})=>{
    return(
        <div>
            <HeaderBar title="Pwofil Ou"/>
            { userAuthInfo.email ? <UserInfo {...userAuthInfo} />:<Authentication/>}
            <Navigation currentPage="profile"/>
        </div>
    )
}  

const ProfileWithQuery=graphql(
    READ_AUTH_INFO,{
        props:({data:{ userAuthInfo }})=>({
            userAuthInfo
        })
    }
)(Profile)


export default withRouter(ProfileWithQuery) ;