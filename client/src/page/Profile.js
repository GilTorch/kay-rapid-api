import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import Authentication from '../components/Authentication';

import { graphql } from 'react-apollo';
import { READ_AUTH_INFO } from '../queries/queries';
import UserInfo from '../components/UserInfo';




const Profile =({userAuthInfo})=>{
    return(
        <div className="profile">
            <HeaderBar title="Profile"/>
            {!userAuthInfo.email ? <Authentication/> : <UserInfo {...userAuthInfo} />}
            <Navigation currentPage="profile"/>
        </div>
    )
}  

let ProfileWithQuery=graphql(
    READ_AUTH_INFO,{
        props:({data:{ userAuthInfo }})=>({
            userAuthInfo
        })
    }
)(Profile)


export default ProfileWithQuery ;