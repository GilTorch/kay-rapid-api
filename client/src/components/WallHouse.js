import React from 'react';

import { Query } from 'react-apollo';
import { ALL_HOUSES_QUERY } from '../queries/queries';
import { toast } from 'react-toastify';

import HouseCard from './HouseCard';
import HeaderBar from './HeaderBar';
import Loading from './Loading';


const WallHouse=()=>(

    <Query query={ALL_HOUSES_QUERY}>
    {({loading,error,data})=>{
        if(loading) return <Loading/>;
        if(error) return `Error: ${error.message}`;
        return(
            <p>{console.log(JSON.stringify(data))}</p>
        )
    }}
    </Query>
        
)
   


export default WallHouse;