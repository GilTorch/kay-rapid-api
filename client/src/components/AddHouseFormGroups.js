import React from 'react';
import Upload from './Upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

export const HouseImages=({numberLimit})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Chwazi imaj kay la (10 maximum)</label>
            <Upload lengthLimit={numberLimit}/>
        </div>
    )
}


export const Price=({negotiable,toggleNegotiation})=>{

   return(
    <div className="add-house-card__form-group">
    {(!negotiable)?
        <div>
            <label className="add-house-card__label">Pri</label>
            <input className="add-house-card__input" type="number"/>
        </div>:
        <div>
            <label className="add-house-card__label">Pri Minimòm</label>
            <input className="add-house-card__input" type="number"/>
            <label className="add-house-card__label">Pri Maksimòm</label>
            <input className="add-house-card__input" type="number"/>
        </div>
    }   
                        
    <div className="add-house-card__negotiation-box">
        {/* <label className="add-house-card__label">Negosyab:</label> */}
        <label class="checkbox-container">
            <input type="checkbox" value={negotiable} onChange={toggleNegotiation}/>
            <span class="checkmark"></span>
            Negosyab
        </label>
        {/* <input value={negotiable} onChange={toggleNegotiation} className="add-house-input__input-checkbox " type="checkbox"/> */}
    </div>
    </div>

   )
}


export const MaxGuests=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Ki kantite moun ki ka ret nan kay la?</label>
            <input className="add-house-card__input" type="number"/>
        </div>
    )
}


export const WhenToPayHouse=()=>{
    return(
        <div className="add-house-card__form-group when-to-pay-box">
            <label className="add-house-card__label">Chak kilè pou yo peye'w ? </label>
            <div className="add-house-card__when-to-pay-checkbox-group">
            <label className="radio-container">Pa Mwa
                <input name="lease" type="radio" name="radio"/>
                <span className="radio-checkmark"></span>
            </label>
            <label class="radio-container">Pa Ane
                <input name="lease" type="radio" name="radio"/>
                <span className="radio-checkmark"></span>
            </label>
            {/* <label className="add-house-card__label">Pa Mwa<input name="lease" className="add-house-card__checkbox" type="radio"/></label>
            <label className="add-house-card__label">Pa Ane<input name="lease" className="add-house-card__checkbox" type="radio"/></label> */}
            </div>
        </div>
    )
}

export const NumberOfRooms=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Konbyen chanm a kouche kay la genyen</label>
            <input className="add-house-card__input" type="number"/>
        </div>
    )
}

export const NumberOfBathrooms=()=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Konbyen sal de ben kay la genyen</label>
            <input className="add-house-card__input" type="number"/> 
        </div>
    )
}

export const Localisation=({longitude,latitude,getCurrentPosition})=>{
    return(            
        <div className="add-house-card__form-group add-house-card__localisation">
            {!(longitude==null && latitude==null) ? 
                <React.Fragment>
                    <label className="add-house-card__label">Longitid</label>
                    <input className="add-house-card__input" type="text" name="longititude" value={longitude} readOnly/> 
                    <label className="add-house-card__label">Latitid</label>
                    <input className="add-house-card__input" type="text" name="latitude" value={latitude} readOnly/>
                </React.Fragment>
                :"" 
            }

            <button className="add-house-card__localisation-button" onClick={getCurrentPosition}>
                <FontAwesomeIcon style={{display:"block",margin:"auto",fontSize:"30px"}} icon="map-marker-alt"/>
                Klike la pou lokalize kay ou a
            </button>
            <label  className="add-house-card__label add-house-card__localisation-label">
            </label>
        </div>
    )
}

export const HouseCity=({options})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Nan ki komin(vil) kay ou a ye:</label>
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
        <div>
        {/* <div className="add-house-card__form-group">
            
             <label className="add-house-card__label">Kontè:<input className="add-house-card__checkbox" type="checkbox"/></label> 
            
        </div> */}
        <div className="add-house-card__form-group" style={{marginTop:"10px"}}>
            <label className="add-house-card__label">Eske kay la gen:</label>
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Kont&egrave;
            </label>
            <label>Kouran:</label>
            <div className="add-house-card__electricity">
                <label className="radio-container">Kèk Fwa
                    <input name="lease" type="radio" name="radio"/>
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Toutan
                    <input name="lease" type="radio" name="radio"/>
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Raman
                    <input name="lease" type="radio" name="radio"/>
                    <span className="radio-checkmark"></span>
                </label>
                {/* <label>Kèk Fwa:<input name="electricity" type="radio"/></label>
                <label>Toutan:<input name="electricity" type="radio"/></label>
                <label>Raman:<input name="electricity" type="radio"/></label> */}
            </div>
        </div>
        <div className="add-house-card__form-group">
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Rezèvwa
            </label>
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Kizin
            </label>
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Pakin
            </label>
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Tiyo
            </label>
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Sal a manje
            </label>
            <label class="checkbox-container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
                Salon
            </label>
            {/* <label className="add-house-card__label">Rezèvwa:<input className="add-house-card__checkbox" type="checkbox"/></label>
            <label className="add-house-card__label">Kizin:<input className="add-house-card__checkbox" type="checkbox"/></label>
            <label className="add-house-card__label">Pakin:<input className="add-house-card__checkbox" type="checkbox"/></label>
            <label className="add-house-card__label">Tiyo:<input className="add-house-card__checkbox" type="checkbox"/></label>
            <label className="add-house-card__label">Sal a manje:<input className="add-house-card__checkbox" type="checkbox"/></label>
            <label className="add-house-card__label">Salon:<input className="add-house-card__checkbox" type="checkbox"/></label> */}
            <button className="authentication__button success-button">SOUMET</button>
        </div>
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
        <button className="add-house-card__previous-question-button" onClick={handlePreviousQuestion}>
        AVAN
        </button>
        :""
    )
}
