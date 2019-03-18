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
            <React.Fragment>
            <HeaderBar title="Rezilta Rech&egrave;ch Ou Yo" hasBack={true}/>
            <div style={{"marginTop":"60px"}} className="search-results-container">
                {data.Houses.map((house,index)=>{
                    return( 
                    <HouseCard key={index} 
                        previewImage={house.preview_image ? house.preview_image.url:""}
                        ownerName={house.host.firstName+" "+house.host.lastName}
                        price={house.pricing.highestPrice}
                        currency={house.pricing.currency}
                        numberOfBathrooms={house.numBaths}
                        numberOfLivingRooms={house.numLivingRooms}
                        numberOfBedrooms={house.numBedrooms}
                        numberOfDiningrooms={house.numDiningrooms}
                        address={house.location.address}
                        leaseType={house.leaseType==="MONTHLY"?"MWA":"ANE"}
                    />
                    )
                })}
            </div>
            </React.Fragment>
        )
    }}
    </Query>
        
)
   


export default WallHouse;