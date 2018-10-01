import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import Authentication from '../components/Authentication';

import { graphql } from 'react-apollo';
import { READ_AUTH_INFO } from '../queries/queries';




class Profile extends React.Component{
    
    constructor(props){
        super(props);
    }

    

    render(){

        const { userAuthInfo }=this.props

        return(
            <div className="profile">
                { console.log("FROM PROFILE:"+JSON.stringify(userAuthInfo))}
                <HeaderBar title="Profile"/>
                <Authentication/>
                <Navigation currentPage="profile"/>
            </div>
        )
    }
   
}  

let ProfileWithQuery=graphql(
    READ_AUTH_INFO,{
        props:({data:{ userAuthInfo }})=>({
            userAuthInfo
        })
    }
)(Profile)


export default ProfileWithQuery ;