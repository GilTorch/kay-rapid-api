import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import Upload from './Upload';


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
            negotiable:false,
            currentQuestion:0,
            numberOfQuestions:0
        }

        this.toggleNegotiation=this.toggleNegotiation.bind(this);
        this.displayNext=this.displayNext.bind(this);
        this.displayPrevious=this.displayPrevious.bind(this);
    }

    componentDidMount(){
       const formGroups=document.querySelectorAll('.add-house-card__form-group');
       const numberOfQuestions=formGroups.length-1;

       formGroups.forEach((formGroup)=>{
        formGroup.style.display="none";
       })
       formGroups[0].style.display="block";

       this.setState({
           numberOfQuestions
       })
    }

    toggleNegotiation(){
        this.setState({
            negotiable:!this.state.negotiable
        })
    }

    displayNext(event){
        event.preventDefault();
        const formGroups=document.querySelectorAll('.add-house-card__form-group');

        let { currentQuestion }=this.state;

        this.setState({
            previousButtonVisible:true
        })

        if(currentQuestion<formGroups.length){
            formGroups[currentQuestion].style.display="none";
            currentQuestion++;
            formGroups[currentQuestion].style.display="block";
            this.setState({
                currentQuestion
            })
        }else{
            this.setState({
                nextButtonVisible:false,
            })
        }
        
    }

    displayPrevious(event){
        event.preventDefault();
        const formGroups=document.querySelectorAll('.add-house-card__form-group');
        let { currentQuestion }=this.state;
        if(currentQuestion>0){
            formGroups[currentQuestion].style.display="none";
            currentQuestion--;

            formGroups[currentQuestion].style.display="block";
            this.setState({
                currentQuestion
            })
        }else{
            this.setState({
                previousButtonVisible:false,
                nextButtonVisible:true
            })
        }     
        
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
        const { currentQuestion,numberOfQuestions }=this.state;        
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
                                <label>Chwazi imaj kay la (10 maximum):</label>
                                <Upload lengthLimit={10}/>
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
                                <button className="authentication__button success-button">SOUMET</button>
                            </div>
                            {(currentQuestion<numberOfQuestions)?
                                <button className="add-house-card__next-question-button" onClick={this.displayNext}>
                                APRE
                                </button>
                            :""}
                            {(currentQuestion>0)?
                                <button className="add-house-card__next-question-button" onClick={this.displayPrevious}>
                                AVAN
                                </button>
                            :""}
                        </form>
                    </div>
                </div>
            </div>
            )
    }
}

export default AddHouse;