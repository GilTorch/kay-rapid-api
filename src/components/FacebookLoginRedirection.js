import React from 'react'
import {Redirect} from 'react-router-dom';

const FacebookLoginRedirection=()=>{
   return(
     <Redirect to="/profile"/>
   )
}

export default FacebookLoginRedirection;