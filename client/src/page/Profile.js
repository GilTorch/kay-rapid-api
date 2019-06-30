import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import Authentication from '../components/Authentication';

import { graphql,Query } from 'react-apollo';
import { READ_AUTH_INFO } from '../queries/queries';
import UserInfo from '../components/UserInfo';

import "../css/profile.css";

import Loading from '../components/Loading';

import notify from '../utils/notify';

const Profile=()=>(            
    <Query query={READ_AUTH_INFO}>
    {({loading,error,data})=>{
        if (loading) return <Loading/>;
        if (error) {
            alert.error(error.message);
        }
        if(data.userAuthInfo.email){
            alert.success("OU KONEKTE")
            return(
                <React.Fragment>
                    <HeaderBar title="Pwofil Ou"/>
                        <UserInfo {...data.userAuthInfo} />
                    <Navigation currentPage="profile"/>
                </React.Fragment>
            )
        }else{
            alert.error("OU PA KONEKTE")
            return(
                <React.Fragment>
                    <HeaderBar title="Pwofil Ou"/>
                        <Authentication/>
                    <Navigation currentPage="profile"/>
                </React.Fragment>
            )
        }
        
    }}
    </Query>
)

export default Profile;