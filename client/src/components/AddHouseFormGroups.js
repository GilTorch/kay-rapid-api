import React from 'react';
import Upload from './Upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

export const HouseImages=({numberLimit})=>{
    return(
        <div className="add-house-card__form-group">
            <label>Chwazi imaj kay la (10 maximum):</label>
            <Upload lengthLimit={numberLimit}/>
        </div>
    )
}


export const Price=({negotiable,toggleNegotiation})=>{

   return(
    <div className="add-house-card__form-group">
    {(!negotiable)?
        <div>
            <label className="add-house-card__label">Pri:</label>
            <input className="add-house-card__input" type="number"/>
        </div>:
        <div>
            <label className="add-house-card__label">Pri Minimòm:</label>
            <input className="add-house-card__input" type="number"/>
            <label className="add-house-card__label">Pri Maksimòm:</label>
            <input className="add-house-card__input" type="number"/>
        </div>
    }   
                        
    <div className="add-house-card__negotiation-box">
        <label className="add-house-card__label">Negosyab:</label>
        <input value={negotiable} onChange={toggleNegotiation} className="add-house-input__input-checkbox " type="checkbox"/>
    </div>
    </div>
   )
}


export const MaxGuests=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Ki kantite moun ki ka ret nan kay la?:</label>
            <input className="add-house-card__input" type="number"/>
        </div>
    )
}


export const WhenToPayHouse=()=>{
    return(
        <div className="add-house-card__form-group when-to-pay-box">
            <label className="add-house-card__label">Chak kilè pou yo peye'w ? </label>
            <div className="add-house-card__when-to-pay-checkbox-group">
                <label className="add-house-card__label">Pa Mwa<input name="lease" className="add-house-card__checkbox" type="radio"/></label>
                <label className="add-house-card__label">Pa Ane<input name="lease" className="add-house-card__checkbox" type="radio"/></label>
            </div>
        </div>
    )
}

export const NumberOfRooms=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Konbyen chanm a kouche kay la genyen:</label>
            <input className="add-house-card__input" type="number"/>
        </div>
    )
}

export const NumberOfBathrooms=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Konbyen sal de ben kay la genyen:</label>
            <input className="add-house-card__input" type="number"/> 
        </div>
    )
}

export const Localisation=({longitude,latitude,getCurrentPosition})=>{
    return(            
        <div className="add-house-card__form-group">
            {!(longitude==null && latitude==null) ? 
                <div className="add-house-card__form-group">
                    <label className="add-house-card__label">Longitid:</label>
                    <input className="add-house-card__input" type="text" name="longititude" value={longitude} readOnly/> 
                    <label className="add-house-card__label">Latitid:</label>
                    <input className="add-house-card__input" type="text" name="latitude" value={latitude} readOnly/>
                </div>
                :"" 
            }

            <label className="add-house-card__label">Lokalizasyon:</label>
            <button className="add-house-card__localisation-button" onClick={getCurrentPosition}>
            <FontAwesomeIcon icon="map-marker-alt"/>  Lokalize kote'm ye a
            </button>
        </div>
    )
}

export const HouseCity=({options})=>{
    return(
        <div className="add-house-card__form-group">
            <Select options={options}/>
        </div> 
    )
}

export const HouseAddress=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Adr&egrave;s:</label>
            <input className="add-house-card__input" type="text"/>
        </div> 
    )
}

export const Amenities=()=>{
    return(
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
    )
}

export const NextQuestion=({currentQuestion,numberOfQuestions,handleNextQuestion})=>{
  return(  
        (currentQuestion<numberOfQuestions)?
        <button className="add-house-card__next-question-button" onClick={handleNextQuestion}>
        APRE
        </button>
        :""    
  )
}


export const PreviousQuestion=({currentQuestion,handlePreviousQuestion})=>{
    return(
        (currentQuestion>0)?
        <button className="add-house-card__next-question-button" onClick={handlePreviousQuestion}>
        AVAN
        </button>
        :""
    )
}

{/* 


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
:""} */}