import React from 'react';

export function Heart({value,like}){
    let btn_class = value ? "heart-not-liked" :"heart-liked";
    return(
        <div className={btn_class}>
            <span className={btn_class} onClick={like}><i className="fas fa-heart"></i></span>
        </div>
    )
}

export function Price({value,currency,leaseType}){
    return(
        <div className="house-card__price-container">
            {/* <h2>Pri</h2> */}
            <span className="house-card__price">{value} {currency}/{leaseType}</span>
        </div>
    )
}

export function Owner({name}){
    return(
        <div className="house-card__owner-container">
            {/* <h2>Propriyetè a</h2> */}
            {/* <span className="house-card__owner-name">{name}</span> */}
        </div>
    )
}

export function PreviewImage({url}){
    return(
        <div className="house-card__image-preview-container">
            <img className="house-card__image-preview" src={url} alt="" />
        </div>
    )
}

export function Description({ numberOfBedrooms, numberOfBathrooms,numberOfLivingrooms,numberOfDiningrooms }){
    return(
        <div className="house-card__description-container">
            {/* <h2>Deskripsyon</h2> */}
            <span className="house-card__description">
                {numberOfBathrooms} sal de ben, {numberOfBedrooms} chanm a kouche
                , {numberOfDiningrooms} salon, {numberOfLivingrooms} sal a manje
            </span> 
        </div>
    )
}

export function Address({value}){
    return(
        <div className="house-card__address-container">
            {/* <h2>Adrès</h2> */}
            <span className="house-card__address">{value}</span>
        </div>
    )        
}

export function Rating({value}){
    var stars=[];
    for(var i=0;i<value;i++){
        stars.push(<i className="house-card__rating fa fa-star checked" key={i}></i>);                     
    }
    return(
        <div className="house-card__rating-container">
            <h2 className="house-card__label house-card__title">Klasman kay la</h2> 
            <div>
                {stars}
            </div>
        </div>
    )
}

export function Actions(props){
    return(
        <div className="house-card__actions">
            <button className="house-card__action-button"><span><i className="fas icons fa-map-marker-alt"></i> KAT</span></button>
            <button className="house-card__action-button"><span><i className="fas icons fa-camera"></i> FOTO</span></button>
            <button className="house-card__action-button"><span><i className="fas icons fa-video"></i> VIDEO</span></button>
        </div>
    )
}


export function ZonKomante(props){
    return (
    <div>           
    <div className = "ajoute_yon_komante" > 
        <h1 className="zon_yon_komante_title">Zon komante</h1>
    </div>
    <h2 className="ajoute_yon_komante_title">Ajoute yon komante</h2>
    <form className="komanteForm">
        <textarea id="subject" name="subject" placeholder="Bay yon komante sou kay sa"> </textarea>
        <div className="input_textarea">
            <input type="submit" value="Soumet" ></input>
            </div>
    </form>
    </div>
    )
}

