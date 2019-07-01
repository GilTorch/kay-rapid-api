import React from 'react';
import { graphql } from 'react-apollo';
import { WRITE_AUTH_INFO } from '../queries/queries';




const UserInfo=({ firstName,lastName,profilePicture,writeUserAuthInfoToCache })=>{

    function logout(){
        const userObject={
            id:null,
            token:null,
            email:null,
            firstName:null, 
            lastName:null,
            profilePicture:null 
        }
    
        writeUserAuthInfoToCache({variables:{ userAuthInfo: userObject }});
    }

   return( 
    <div className="profile-info-card">
        <img className="profile-img" src={profilePicture} alt={`${firstName+' '+lastName} `}/>
        <p>{firstName} {lastName}</p>
        <button onClick={logout}className="auth-button danger-button">DEKONEKTE</button>
    </div>
   )
}

const UserInfoWithQuery = graphql( WRITE_AUTH_INFO,{"name":"writeUserAuthInfoToCache"})(UserInfo)


export default UserInfoWithQuery;