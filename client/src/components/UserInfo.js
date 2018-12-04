import React from 'react';
import ImageLoader from 'react-image-file';

const UserInfo=({ firstName,lastName,profilePicURL })=>{
   return( 
    <div className="profile-info" style={{marginTop:"100px"}}>
        <p>{firstName} {lastName} {profilePicURL}</p>
        <button className="authentication-button profile-info__logout-button">Log Out</button>
    </div>
   )
}

export default UserInfo;