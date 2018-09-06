import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import Authentication from '../components/Authentication';




class Profile extends React.Component{
    

    render(){
        return(
            <div className="profile">
                <HeaderBar title="Profile"/>
                <Authentication/>
                <Navigation currentPage="profile"/>
            </div>
        )
    }
   
}  

export default Profile;