import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import Authentication from '../components/Authentication';

import { graphql,Query } from 'react-apollo';
import { READ_AUTH_INFO } from '../queries/queries';
import UserInfo from '../components/UserInfo';

import { withRouter } from 'react-router-dom';

import "../css/profile.css";

import Loading from '../components/Loading';

import notify from '../utils/notify';
import { toast } from 'react-toastify';



// class Profile extends React.Component{
    
//     constructor(props){
//         super(props)
//     }

//     render(){
//             const {userAuthInfo}=this.props;
//             let componentToRender;
            
//             if(userAuthInfo){
//                 if(userAuthInfo.email)
//                 {
//                     notify('OU KONEKTE',"success")
//                     componentToRender=<UserInfo {...userAuthInfo} />
//                 }
//                 else{
//                     notify('OU PA KONEKTE',"error")
//                     componentToRender=<Authentication/>
//                 }
//             }

//             return(
//                 <div>
//                     <HeaderBar title="Pwofil Ou"/>
//                     {componentToRender}
//                     <Navigation currentPage="profile"/>
//                 </div>
//             )
//     }
// }  

// const ProfileWithQuery=graphql(
//     READ_AUTH_INFO,{
//         props:({data:{ userAuthInfo }})=>({
//             userAuthInfo
//         })
//     }
// )(Profile)


// export default withRouter(ProfileWithQuery) ;

// const UserInfoWrappedInHeader
{/* <HeaderBar title="Pwofil Ou"/>
            {componentToRender}
        <Navigation currentPage="profile"/>

        
let componentToRender;

if (userAuthInfo){
    if(userAuthInfo.email){
        toast.success("OU KONEKTE",{autoClose:1000})
        componentToRender=<UserInfo {...this.props.info}/>
    }else{
        toast.error("OU PA KONEKTE",{autoClose:1000})
        componentToRender=<Authentication/>
    }
} */}

// const { userAuthInfo }=this.props;

const Profile=()=>(            
    <Query query={READ_AUTH_INFO}>
    {({loading,error,data})=>{
        if (loading) return <Loading/>;
        if (error) {
            toast.error(error.message,{autoClose:2000});
        }
        if(data.userAuthInfo.email){
            toast.success("OU KONEKTE",{autoClose:800})
            return(
                <React.Fragment>
                    <HeaderBar title="Pwofil Ou"/>
                        <UserInfo {...data.userAuthInfo} />
                    <Navigation currentPage="profile"/>
                </React.Fragment>
            )
        }else{
            toast.warn("OU PA KONEKTE",{autoClose:1200})
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