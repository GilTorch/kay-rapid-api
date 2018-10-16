import React from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css'

const AddHouse=()=>{
    return (
        <div>
        <HeaderBar title="Add House"/>
            <div className="card add-house-card">
                <div className="add-house-screen">
                    <form>
                        <div className="add-house-card__form-group">
                            <label>Pri:<input type="number"/></label>
                            <label>Negosyab:<input type="checkbox"/></label>
                        </div>
                        <div>
                            <label>Ki kantitite moun ki ka ret nan kay la?:<input type="number"/></label>
                        </div>
                        <div className="add-house-card__form-group">
                            <fieldset>
                                <label>Chak kile pou yo peye'w ? : </label>
                                <label>Pa Mwa<input type="checkbox"/></label>
                                <label>Pa Ane<input type="checkbox"/></label>
                            </fieldset>
                        </div>
                        <div className="add-house-card__form-group">
                            <label>Konbye moun kay la dwe genyen:<input type="number"/></label>
                        </div>
                        <div className="add-house-card__form-group">
                            <fieldset>
                                <label>Konbyen chanm a kouche kay la genyen:<input type="number"/></label>
                                <label>Konbyen sal de ben kay la genyen:<input type="number"/></label>     
                                <label>Konbyen salon kay la genyen:<input type="number"/></label>
                                <label>Konbyen sal a manje kay la genyen:<input type="number"/></label>
                            </fieldset>
                        </div>
                        <div className="add-house-card__form-group">
                            <label>Lokalizasyon:</label>
                            <label>Longitid:<input type="text"/></label>
                            <label>Latitid:<input type="text"/></label>
                        </div>
                        <div className="add-house-card__form-group">
                            <label>Adres:<input type="text"/></label>
                        </div>
                        <div className="add-house-card__form-group">
                            <fieldset>
                            <label>Eske kay la gen:</label>
                            <label>Konte:<input type="checkbox"/></label>
                            <div className="add-house-card__form-group">
                                <label>Kouran:</label>
                                <label>Kek Fwa:<input type="checkbox"/></label>
                                <label>Toutan:<input type="checkbox"/></label>
                                <label>Raman:<input type="checkbox"/></label>
                            </div>
                                <label>Rezevwa:<input type="checkbox"/></label>
                                <label>Kizin:<input type="checkbox"/></label>
                                <label>Pakin:<input type="checkbox"/></label>
                                <label>Tiyo:<input type="checkbox"/></label>
                            </fieldset>
                        </div>
                        <button className="authentication__button add-house-card__button">SOUMET</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddHouse;