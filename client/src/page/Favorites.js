import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Navigation';
import HeaderBar from '../components/HeaderBar';
import HouseCard from '../components/HouseCard';




const Favorites=()=>{
    return(
        <div className="favorites">
            <HeaderBar title="Kay Favori w Yo"/>
            <div style={{marginTop:"69px",marginBottom:"60px"}}>
            <HouseCard 
                previewImage="https://bit.ly/2zoDdGA" ownerName="Gilbert" 
                numberOfBedrooms={3} numberOfBathrooms={2} 
                numberOfDiningrooms={2} numberOfLivingrooms={1}
                liked={true}
                rating={4} 
                price="2000" currency="US" leaseType="an" 
                address="Fermathe 52, rue Puzot #2" phone="48550669" 
            />
            <HouseCard 
                previewImage="https://bit.ly/2zoDdGA" ownerName="Stanley" 
                numberOfBedrooms={2} numberOfBathrooms={3} 
                numberOfDiningrooms={1} numberOfLivingrooms={1}
                rating={2} 
                liked={true}
                price="10000" currency="US" leaseType="an" 
                address="Delmas 33,rue Dr. Kernizan #10" phone="46863441" 
            />
            </div>
            <Navigation currentPage="favorites"/>
        </div>
    )
}  ;

export default Favorites;