import React from 'react';
import House from './House';

class CardHouses extends React.Component {
    render() {
        return (
            <div>
                {/* <HouseProfile PrixHouseUs={houseinfo.PrixHouseUs} image={houseinfo.image}
                    nom={houseinfo.ProfilePropriete} address={houseinfo.Address} description={houseinfo.Description} />
                <HouseProfile PrixHouseUs={houseinfo.PrixHouseUs} image={houseinfo.image}
                    nom={houseinfo.ProfilePropriete} address={houseinfo.Address} description={houseinfo.Description} />
                <HouseProfile PrixHouseUs={houseinfo.PrixHouseUs} image={houseinfo.image}
                    nom={houseinfo.ProfilePropriete} address={houseinfo.Address} description={houseinfo.Description} /> */}
                <House ownerName="Gilbert" price="2000" currency="US" leaseType="an" address="Fermathe 52, rue Puzot #2" phone="48550669" numberOfBedrooms={3} numberOfBathrooms={2}/>
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