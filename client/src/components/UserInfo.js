import React from 'react';

const UserInfo=({ firstName,lastName,profilePicture })=>{
   return( 
    <div className="profile-info">
        <img src={profilePicture}/>
        <h2><span>{firstName}</span> <span>{lastName}</span></h2>
    </div>
   )
}

export default UserInfo;