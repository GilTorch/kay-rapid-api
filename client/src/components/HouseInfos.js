import React from 'react';

export function Price({value,currency,leaseType}){
    return(
        <div className="house-card__price-container">
            <h2>Pri</h2>
            <span className="house-card__price">{value} {currency}/{leaseType}</span>
        </div>
    )
}

export function Owner({name}){
    return(
        <div className="house-card__owner-group">
            <h2>Propriyetè a</h2>
            <span className="house-card__owner-name">{name}</span>
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

export function Description({ numberOfBedrooms, numberOfBathrooms }){
    return(
        <div className="house-card__description-group">
            <h2>Deskripsyon</h2>
            <span className="house-card__description">
                {numberOfBathrooms} sal de ben, {numberOfBedrooms} chanm a kouche
            </span> 
        </div>
    )
}

export function Address({value}){
    return(
        <div className="house-card__address-group">
            <h2>Adrès</h2>
            <span className="house-card__address">{value}</span>
        </div>
    )        
}

export function Rating({value}){
    var stars=[];
    for(var i=0;i<value;i++){
        stars.push(<span className="fa fa-star checked" key={i}></span>);                     
    }
    return(
        <div className="house-card__rating-group">
            <h2>Klasman</h2> 
            <div className="house-card__rating">
                {stars}
            </div>
        </div>
    )
}

export function Actions(props){
    return(
        <div className="house-card__actions">
            <span className="icons"><i className="fas fa-map-marker-alt"></i> Gade zòn nan sou yon map</span>
            <span className="icons"><i className="fas fa-eye"></i> Vizitel ak telefòn ou!</span>
            <span className="icons"><i className="fas fa-camera"></i> Gade kèk foto/video kay la</span>
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

// function InfoHouse(props){
//     return(
//         <div className="container_houseinfo">
//             <PrixUS  prixenUs={["25550 "]} annee={" /an"} index="1" negosye={[" negosyab"," Pa negosyab"]}/>
//             <Name nom ={"Jean Jacques Kenley"} />
//             <DescriptionHouse  desciptionInfo={["3 chanm akouche","1 salon", "1 sal a manje", " 2 douch"].join(", ")}  klasmans={["stars","stars"]} />
//             <ZonKomante />
//         </div>
//     )
// }

// export default InfoHouse; 