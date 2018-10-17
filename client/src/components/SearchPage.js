import React from 'react';
import AmenitiesApartement from './amenities/AmenitiesApartement';
import MensRooms from './amenities/MensRooms';
import IndependentHouseOrVilla from './amenities/IndependentHouseOrVilla';
import Parking from './amenities/Parking';
import Furniture from './amenities/Furniture';
import TapWater from './amenities/TapWater';
import Counters from './amenities/Counters';
import Tank from './amenities/Tank';
import Always from './amenities/Always';
import Sometimes from './amenities/Sometimes';
import Rarely from './amenities/Rarely';
import Villa from './amenities/Villa';



class Area extends React.Component {

    render() {
        return(
            <div>
                <h1>Z&#242;n</h1>
                <div className="Area-container">
                    <button className="Area-container__ButtonList">{this.props.lokalite} <span><i className="fas fa-times"></i></span></button>  <button className="Area-container__ButtonAdd">Ajoute Lokalite</button>
                </div>
                
            </div>
        )
    }
}

const House =(props) => {
   const num= props.HousesNumbers.map((numbers)=> {
       return <option  value={numbers} key={numbers.toString()}>{numbers}</option>
    })
    return (
        <div>   <div className="titleCharacteristic">Chanm</div>
        
            <select className="select">
                    {num}
                </select>
                
        </div>
    )
}
const Showers =(props) => {
    const num = props.ShowersNumber.map((numbers) => {
        return <option value={numbers} key={numbers.toString()}>{numbers}</option>
    })
        return(
            <div>
                <div className="titleCharacteristic">Douch</div>
                <select className="select">
                   {num}
                </select>
            </div>
        )
    
}
const Salon =(props) => {
    const num = props.SalonNumbers.map((numbers) => {
        return <option value={numbers} key={numbers.toString()}>{numbers}</option>
    })
    return (
        <div>
            <div className="titleCharacteristic">Salon</div>
            <select className="select">
                    {num}
                </select>
        </div>
    )
}


const  Diningroom =(props) => {
    const num = props.DiningroomNumbers.map((numbers) => {
        return <option value={numbers} key={numbers.toString()}>{numbers}</option>
    })
    return (
        <div>
            <div className="titleCharacteristic">Sal a manje</div>
            <select className="select">
                    {num}
                </select>
        </div>
    )
}


const AnyHouse = () => {
    return (
        <div className="AnyHouse-container">
            <label >Nenpot ?
            
        </label>
            <input type="checkbox" />
            <span className="checkmark"></span>
        </div>
    )
}

class  WhichTypeOfProprietorship extends React.Component {
    render() {
        return (

            <div>
                <h1>Ki tip propriyete  Kay ou vle?</h1>
                <AmenitiesApartement />
                <Villa />
                <IndependentHouseOrVilla />
                <MensRooms />
            </div>
        );
    }
    
}



const DoesTheHouseHave = () => {
    return (
        <div>
            <h1>Eske ou  vle Kay la gen ?</h1>
            <div className="Amenities">
                <Parking />
               <Furniture />
                <TapWater />
                <Counters />
                <Tank />
            </div>
            
        </div> 
    );
}




const Electricity = () => {
    return (
        <div>
            <h1>Eske ou vle Kay la toujou gen Kouran (EDH)?</h1>
            <div className="Aminities">
                <Always />
                <Sometimes />
                <Rarely />
            </div>
        </div>
    )
}
  const FindThoseHousesButton = () => {
return <button className="FindThoseHousesButton">Jwen Kay Sa yo (1750)</button>
  }  
class Characteristic extends React.Component {
    render() {
        const Number =[0,1,2,3,4,5,6,7,8,9,10];
       
        
        return (
            <div> 
                <Area lokalite="Port-au-Prince"/>
                <h1>Ki Karakteristik kay w'ap chache ?</h1>
                <div className="Characteristic-Numbers">
                    <House HousesNumbers={Number} />
                    <Showers ShowersNumber={Number} />
                    <Salon SalonNumbers={Number} />
                    <Diningroom Diningrocd omNumbers={Number} />
                </div>            
            </div>
        )
    }
}

    
class SearchFilterPage extends React.Component {

    render() {
        return (
<div className = "ContainerCharacteristic" >
               
               <Characteristic />
                <div>
                    <AnyHouse />
                    <WhichTypeOfProprietorship />
                    <DoesTheHouseHave />
                    <Electricity />
                    <FindThoseHousesButton />
               </div>
                
            </div>
        )
    }
}

export default SearchFilterPage;