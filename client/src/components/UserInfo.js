import React from 'react';
import ImageLoader from 'react-image-file';

const UserInfo=({ firstName,lastName,profilePicture })=>{
   return( 
    <div className="profile-info" style={{marginTop:"100px"}}>
        <img src={profilePicture}/>
        <p>{firstName} {lastName}</p>
        <button className="authentication-button profile-info__logout-button">Log Out</button>
    </div>
   )
}

export default UserInfo;