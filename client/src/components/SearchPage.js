import React from 'react';

class Area extends React.Component {

    render() {
        return(
            <div>
                <h1>Z&#242;n</h1>
                <div className="containerArea">
                    <button className="listAreaButton">{this.props.lokalite} <span><i class="fas fa-times"></i></span></button>  <button className="addAreaButton">Ajoute Lokalite</button>
                </div>
                
            </div>
        )
    }
}

const House =(props) => {
    return (
        <div>   <p className="titleCharacteristic">Chanm</p>
        
                <select>
                <option value={props.HousesNumber}>{props.HousesNumbers[0]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[1]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[2]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[3]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[4]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[5]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[6]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[7]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[8]}</option>
                <option value={props.HousesNumber}>{props.HousesNumbers[9]}</option>
                </select>
                
        </div>
    )
}
const Showers =(props) => {
        return(
            <div>
                <p className="titleCharacteristic">Douch</p>
                <select>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[0]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[1]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[2]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[4]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[5]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[3]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[6]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[7]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[8]}</option>
                    <option value={props.ShowersNumber}>{props.ShowersNumber[9]}</option>
                </select>
            </div>
        )
    
}
const Salon =(props) => {
    return (
        <div>
            <p className="titleCharacteristic">Salon</p>
                <select>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[0]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[1]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[2]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[4]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[5]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[3]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[6]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[7]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[8]}</option>
                    <option value={props.SalonNumbers}>{props.SalonNumbers[9]}</option>
                </select>
        </div>
    )
}


const  Diningroom =(props) => {
    return (
        <div>
            <p className="titleCharacteristic">Sal a manje</p>
                <select>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[0]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[1]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[2]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[4]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[5]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[3]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[6]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[7]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[8]}</option>
                    <option value={props.DiningroomNumbers}>{props.DiningroomNumbers[9]}</option>
                </select>
        </div>
    )
}


const AnyHouse = () => {
    return (
        <div className="containerAnyHouse">
        <label >Nenpot
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
        </div>
    )
}
  /*class Howmuchmoney  extends React.Component {
    render(){
        
        return (
            <div>
                <h1>Konbyen K&#242;b kay la ye?</h1>
                <div className="HowMuchMoney_Container">
                    <form action="/action_page.php">
                        <input type="number" placeholder="Antre kantite K&#242;b la" className="HowMuchMoney_Input"/>
                    
                    
</form> 
                   </div>
            </div>
        )
    }
}

*/
const WhichTypeOfProprietorship = () => {
    return (
    
        <div>
            <div><h1>Ki tip propriyete a Kay la ye?</h1></div>
            <div className="gridButton">
                <button className="button">Apatman</button>
                <button className="button">Kay endepan / Villa</button>
                <button className="button">Chanm Gason</button>
            </div>
            
        </div>
    );
}


const DoesTheHouseHave = () => {
    return (
        <div>
            <h1>Eske Kay la gen ?</h1>
            <div class="gridButton">
                <button className="button">Parking</button>
                <button className="button">M&egrave;b</button>
                <button className="button">Tiyo</button>
                <button className="button">Konte</button>
                <button className="button">Res&egrave;vwa</button>
            </div>
            
        </div> 
    );
}


const Electricity = () => {
    return (
        <div>
            <h1>Eske gen Kouran EDH ?</h1>
            <div className="gridButton">
                <button className="button">Toutan</button>
                <button className="button">K&egrave;k Fwa</button>
                <button className="button">Raman</button>
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
                <h1>Karakteristik kay w'ap chache a</h1>
                <div className="Numbers">
                    <House HousesNumbers={Number} />
                    <Showers ShowersNumber={Number} />
                    <Salon SalonNumbers={Number} />
                    <Diningroom DiningroomNumbers={Number} />
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
                <div >
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