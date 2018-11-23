import React from 'react';
import HouseCard from './HouseCard';

class CardHouses extends React.Component {
    render() {
        return (
            <div>
                <HouseCard 
                    previewImage="https://bit.ly/2zoDdGA" ownerName="Gilbert" 
                    numberOfBedrooms={3} numberOfBathrooms={2} 
                    numberOfDiningrooms={2} numberOfLivingrooms={1}
                    rating={4} 
                    price="2000" currency="US" leaseType="an" 
                    address="Fermathe 52, rue Puzot #2" phone="48550669" 
                />
                 <HouseCard 
                    previewImage="https://bit.ly/2zoDdGA" ownerName="Stanley" 
                    numberOfBedrooms={2} numberOfBathrooms={3} 
                    numberOfDiningrooms={1} numberOfLivingrooms={1}
                    rating={2} 
                    price="10000" currency="US" leaseType="an" 
                    address="Delmas 33,rue Dr. Kernizan #10" phone="46863441" 
                />
                 <HouseCard 
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
   


const houseinfo = {
    image:"https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a1532b84f66efdf63f7af7b1f0493f5&auto=format&fit=crop&w=1458&q=80/&text=slide1",
    PrixHouseUs: "3500 US /an",
    Address: "Fermath",
    Description: "4 chanm a kouche, 1 salon, 2 twalet",
    ProfilePropriete : {
        NomPropriete: "Jean Jacques"
    }
   
}
  



export default CardHouses;