import React from 'react';
import Upload from './Upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HouseMap from './HouseMap';
import Select from 'react-select';

export const HouseImages=({numberLimit})=>{
    return(
        <div>
            <div className="add-house-card__form-group">
                <label className="add-house-card__label">Chwazi yon imaj prensipal pou kay la</label>
                <Upload numberOfImagesAllowed={1}/>
            {/* </div>
            <div className="add-house-card__form-groupe"> */}
                <label className="add-house-card__label">Chwazi imaj pou chanm a kouche yo</label>
                <Upload numberOfImagesAllowed={numberLimit}/>
            </div>
            <div className="add-house-card__form-group">
                <label className="add-house-card__label">Chwazi imaj pou salon an (10 pou pi plis)</label>
                <Upload numberOfImagesAllowed={numberLimit}/>
            {/* </div>
            <div className="add-house-card__form-groupe"> */}
            <label className="add-house-card__label">Chwazi imaj pou sal a manje yo (10 pou pi plis)</label>
                <Upload numberOfImagesAllowed={numberLimit}/>
            </div>
            <div className="add-house-card__form-group">
            <label className="add-house-card__label">Chwazi imaj pou twalet yo (10 pou plis)</label>
                <Upload numberOfImagesAllowed={numberLimit}/>
            </div>
        </div>
    )
}


export const Price=({negotiable,handleChange})=>{

   return(
    <div className="add-house-card__form-group">
    <div className="add-house-card__negotiation-box">
        <label className="checkbox-container">
            <input name="negotiable" type="checkbox" value={negotiable} onChange={handleChange}/>
            <span className="checkmark"></span>
            Negosyab
        </label>
    </div>
    {(!negotiable)?
        <div>
            <label className="add-house-card__label">Pri</label>
            <input name="basePrice" onChange={handleChange} className="add-house-card__input" type="number"/>
        </div>:
        <div>
            <label className="add-house-card__label">Pri Minimòm</label>
            <input name="basePrice" onChange={handleChange} className="add-house-card__input" type="number"/>
            <label className="add-house-card__label">Pri Maksimòm</label>
            <input name="maxPrice" onChange={handleChange} className="add-house-card__input" type="number"/>
        </div>
    }   
                        
    </div>

   )
}


export const MaxGuests=({handleChange})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Ki kantite moun ki ka ret nan kay la?</label>
            <input name="maxGuests" onChange={handleChange}className="add-house-card__input" type="number"/>
        </div>
    )
}


export const WhenToPayHouse=({handleChange})=>{
    return(
        <div className="add-house-card__form-group when-to-pay-box">
            <label className="add-house-card__label">Chak kilè pou yo peye'w ? </label>
            <div className="add-house-card__when-to-pay-checkbox-group">
            <label className="radio-container">Pa Mwa
                <input  onClick={handleChange} name="lease" type="radio" name="whenToPay" value="MONTHLY"/>
                <span className="radio-checkmark"></span>
            </label>
            <label className="radio-container">Pa Ane
                <input onClick={handleChange} name="lease" type="radio" name="whenToPay" value="YEARLY"/>
                <span className="radio-checkmark"></span>
            </label>
            </div>
        </div>
    )
}

export const NumberOfRooms=({handleChange})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Konbyen chanm a kouche kay la genyen</label>
            <input name="numberOfRooms" onChange={handleChange} className="add-house-card__input" type="number"/>
        </div>
    )
}

export const NumberOfBathrooms=({handleChange})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Konbyen sal de ben kay la genyen</label>
            <input name="numberOfBathrooms" onChange={handleChange} className="add-house-card__input" type="number"/> 
        </div>
    )
}

export const Localisation=({longitude,latitude,zoom,haveUsersLocation,handleChange,getCurrentPosition})=>{
    return(            
        <div className="add-house-card__form-group add-house-card__localisation">

            {!(longitude==null && latitude==null) ? 

                <React.Fragment>
                    <HouseMap lng={longitude} lat={latitude} zoom={zoom} haveUsersLocation={haveUsersLocation}/>
                    <label className="add-house-card__label">Longitid</label>
                    <input name="longitude" onChange={handleChange}className="add-house-card__input" type="text" name="longititude" value={longitude} readOnly/> 
                    <label className="add-house-card__label">Latitid</label>
                    <input name="latitude" onChange={handleChange}className="add-house-card__input" type="text" name="latitude" value={latitude} readOnly/>
                </React.Fragment>
                :<p className="add-house-card__localisation-warning">Nou poko lokalize w. Si w te klike deja eseye refè sa.</p>
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

export const HouseCity=({options,handleChange,value})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Nan ki komin(vil) kay ou a ye:</label>
            <Select value={value} name="city" onChange={handleChange} options={options}/>
        </div> 
    )
}

export const HouseAddress=({handleChange})=>{
    return(
        <div className="add-house-card__form-group">
            <label className="add-house-card__label">Adr&egrave;s:</label>
            <input name="address" onChange={handleChange} className="add-house-card__input" type="text"/>
        </div> 
    )
}

export const Amenities=({handleChange})=>{
    return(
        <div>
        <div className="add-house-card__form-group" style={{marginTop:"10px"}}>
            <label className="add-house-card__label">Eske kay la gen:</label>
            <label className="checkbox-container">
                <input name="electricity" onChange={handleChange} type="checkbox"/>
                <span className="checkmark"></span>
                Kont&egrave;
            </label>
            <label>Kouran:</label>
            <div className="add-house-card__electricity">
                <label className="radio-container">Kèk Fwa
                    <input onChange={handleChange} name="electricity-frequency" type="radio" value="OFTEN"/>
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Toutan
                    <input onChange={handleChange}  name="electricity-frequency" type="radio" value="ALWAYS"/>
                    <span className="radio-checkmark"></span>
                </label>
                <label className="radio-container">Raman
                    <input onChange={handleChange}  name="electricity-frequency" type="radio" value="SOMETIMES"/>
                    <span className="radio-checkmark"></span>
                </label>
            </div>
        </div>
        <div className="add-house-card__form-group add-house-card__amenities-2">
            <label>Eske kay la gen:</label>
            <div className="add-house-card__form-group-column">
                <label className="checkbox-container">
                    <input name="waterTank" onChange={handleChange} type="checkbox"/>
                    <span className="checkmark"></span>
                    Rezèvwa
                </label>
                <label className="checkbox-container">
                    <input name="kitchen" onChange={handleChange}  type="checkbox"/>
                    <span className="checkmark"></span>
                    Kizin
                </label>
                <label className="checkbox-container">
                    <input name="parking" onChange={handleChange}  type="checkbox"/>
                    <span className="checkmark"></span>
                    Pakin
                </label>
            </div>
            <div className="add-house-card__form-group-column">
                <label className="checkbox-container">
                    <input name="pipe" onChange={handleChange}  type="checkbox"/>
                    <span className="checkmark"></span>
                    Tiyo
                </label>
                <label className="checkbox-container">
                <input name="diningRoom" onChange={handleChange}  type="checkbox"/>
                <span className="checkmark"></span>
                Sal a manje
                </label>
                <label onChange={handleChange} className="checkbox-container">
                <input name="livingRoom" type="checkbox"/>
                <span className="checkmark"></span>
                Salon
                </label>
            </div>
        </div>
        </div>
    )
}

export const Submit=({handleSubmit})=>{
    return(
        <div className="add-house-card__form-group">
            <button onClick={handleSubmit} style={{width:"100%"}} className="authentication__button success-button">SOUMET</button>
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
