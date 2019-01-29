import React from 'react';
import HouseCard from './HouseCard';
import Navigation from '../components/Navigation';
import HeaderBar from './HeaderBar';

class WallHouse extends React.Component {
    render() {
        return (
            <div className="search-results">
                <HeaderBar title="Rezilta Rechech Ou Yo" hasBack={true}/>
                <HouseCard
                    liked={true} 
                    previewImage="https://bit.ly/2zoDdGA" ownerName="Gilbert" 
                    numberOfBedrooms={3} numberOfBathrooms={2} 
                    numberOfDiningrooms={2} numberOfLivingrooms={1}
                    rating={4} 
                    price="2000" currency="US" leaseType="an" 
                    address="Fermathe 52, rue Puzot #2" phone="48550669" 
                />
                 <HouseCard
                    liked={true} 
                    previewImage="https://bit.ly/2zoDdGA" ownerName="Stanley" 
                    numberOfBedrooms={2} numberOfBathrooms={3} 
                    numberOfDiningrooms={1} numberOfLivingrooms={1}
                    rating={2} 
                    price="10000" currency="US" leaseType="an" 
                    address="Delmas 33,rue Dr. Kernizan #10" phone="46863441" 
                />
                 <HouseCard
                    liked={true} 
                    previewImage="https://bit.ly/2zoDdGA" ownerName="Peterson" 
                    numberOfBedrooms={1} numberOfBathrooms={1} 
                    numberOfDiningrooms={1} numberOfLivingrooms={1}
                    rating={4} 
                    price="2000" currency="US" leaseType="an" 
                    address="Fermathe 52, rue Puzot #2" phone="48550669" 
                />
            </div>
        )

    }
    
   
    }
   


export default WallHouse;