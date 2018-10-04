import React from 'react';
import ImageLoader from 'react-image-file';

const UserInfo=({ firstName,lastName,profilePicture })=>{
   return( 
    <div className="profile-info">
        <ImageLoader file={profilePicture}/>
        <p>{firstName} {lastName}</p>
    </div>
   )
}

export default UserInfo;