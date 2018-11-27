import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';


const options=[
    {value:'',label:"Pòtoprens"},
    {value:'',label:"Fò Libète"},
    {value:'',label:"Jakmèl"},
    {value:'',label:"Gonayiv"},
    {value:'',label:"Okap"},
    {value:'',label:"Okay"},
    {value:'',label:"Jeremi"},
    {value:'',label:"Pòdepè"},
    {value:'',label:"Ench"}
]

class AddHouse extends Component{
    constructor(){
        super()
        this.getCurrentPosition=this.getCurrentPosition.bind(this)

        this.state={
            longitude:null,
            latitude:null,
            negotiable:false
        }

        this.toggleNegotiation=this.toggleNegotiation.bind(this)
    }

    // getCurrentPosition(){

    // }

    toggleNegotiation(){
        this.setState({
            negotiable:!this.state.negotiable
        })
    }

    getCurrentPosition(event){
        event.preventDefault();
        const that=this
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                console.log("Longitude:"+position.coords.longitude+","+"Latitude:"+position.coords.latitude);
                that.setState({
                    longitude:position.coords.longitude,
                    latitude:position.coords.latitude
                })
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    render(){

        let price

        if(!this.state.negotiable){
            price=
            <div>
                <label className="add-house-card__label">Pri:</label>
                <input className="add-house-card__input" type="number"/>
            </div>
        }else{
            price=
            <div>
                <label className="add-house-card__label">Pri Minimòm:</label>
                <input className="add-house-card__input" type="number"/>
                <label className="add-house-card__label">Pri Maksimòm:</label>
                <input className="add-house-card__input" type="number"/>
            </div>
        }   

        return (
            <div>
            <HeaderBar title="Ajoute Kay Ou" hasBack={true}/>
                <div className="card add-house-screen">
                    <div className="add-house-card">
                        <form>
                            <div className="add-house-card__form-group">
                                <label>Chwazi imaj kay la nan galri a:</label>
                                <input type="file" accpet=".jpg,.png"/>
                            </div>
                            <div className="add-house-card__form-group">
                                {price}                         
                                <div className="add-house-card__negotiation-box">
                                    <label className="add-house-card__label">Negosyab:</label>
                                    <input onChange={this.toggleNegotiation} className="add-house-input__input-checkbox " type="checkbox"/>
                                </div>
                            </div>
                            <div className="add-house-card__form-group">
                                <label className="add-house-card__label">Ki kantite moun ki ka ret nan kay la?:</label>
                                <input className="add-house-card__input" type="number"/>
                            </div>
                            <div className="add-house-card__form-group when-to-pay-box">
                                    <label className="add-house-card__label">Chak kilè pou yo peye'w ? </label>
                                    <div className="add-house-card__when-to-pay-checkbox-group">
                                        <label className="add-house-card__label">Pa Mwa<input name="lease" className="add-house-card__checkbox" type="radio"/></label>
                                        <label className="add-house-card__label">Pa Ane<input name="lease" className="add-house-card__checkbox" type="radio"/></label>
                                    </div>
                            </div>
                            <div className="add-house-card__form-group">
                                <label className="add-house-card__label">Konbyen chanm a kouche kay la genyen:</label>
                                <input className="add-house-card__input" type="number"/>
                            </div>
                            <div className="add-house-card__form-group">
                                <label className="add-house-card__label">Konbyen sal de ben kay la genyen:</label>
                                <input className="add-house-card__input" type="number"/> 
                            </div>  
                            {!(this.state.long==null && this.state.latitude==null) ? 
                                <div className="add-house-card__form-group">
                                    <label className="add-house-card__label">Longitid:</label>
                                    <input className="add-house-card__input" type="text" name="longititude" value={this.state.longitude} readOnly/> 
                                    <label className="add-house-card__label">Latitid:</label>
                                    <input className="add-house-card__input" type="text" name="latitude" value={this.state.latitude} readOnly/>
                                </div>
                                :"" 
                            }
                            <div className="add-house-card__form-group">
                                <label className="add-house-card__label">Lokalizasyon:</label>
                                <button className="add-house-card__localisation-button" onClick={this.getCurrentPosition}>
                                <FontAwesomeIcon icon="map-marker-alt"/>  Lokalize kote'm ye a
                                </button>
                            </div>
                            <div className="add-house-card__form-group">
                                <Select options={options}/>
                            </div>
                            <div className="add-house-card__form-group">
                                <label className="add-house-card__label">Adr&egrave;s:</label>
                                <input className="add-house-card__input" type="text"/>
                            </div> 
                            <div className="add-house-card__form-group">
                                <label className="add-house-card__label">Eske kay la gen:</label>
                                <label className="add-house-card__label">Kontè:<input className="add-house-card__checkbox" type="checkbox"/></label>
                                
                                <div style={{marginTop:"10px"}}>
                                    <label>Kouran:</label>
                                    <div className="add-house-card__electricity">
                                        <label>Kèk Fwa:<input name="electricity" type="radio"/></label>
                                        <label>Toutan:<input name="electricity" type="radio"/></label>
                                        <label>Raman:<input name="electricity" type="radio"/></label>
                                    </div>
                                </div>
                                <label className="add-house-card__label">Rezèvwa:<input className="add-house-card__checkbox" type="checkbox"/></label>
                                <label className="add-house-card__label">Kizin:<input className="add-house-card__checkbox" type="checkbox"/></label>
                                <label className="add-house-card__label">Pakin:<input className="add-house-card__checkbox" type="checkbox"/></label>
                                <label className="add-house-card__label">Tiyo:<input className="add-house-card__checkbox" type="checkbox"/></label>
                                <label className="add-house-card__label">Sal a manje:<input className="add-house-card__checkbox" type="checkbox"/></label>
                                <label className="add-house-card__label">Salon:<input className="add-house-card__checkbox" type="checkbox"/></label>
                            </div>
                            <button className="authentication__button success-button">SOUMET</button>
                        </form>
                    </div>
                </div>
            </div>
            )
    }
}

export default AddHouse;