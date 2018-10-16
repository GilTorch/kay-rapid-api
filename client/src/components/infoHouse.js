import React from 'react';

function PrixUS(props){
    return(
        <div className="PrixUs">
            <div>
                <h1>Prix en Us</h1>
                <p>{props.prixenUs} {props.annee} {props.negosye[props.index]}</p>
            </div>
        </div>
    )
}

function Name(props){
    return(
        <div className="Name">  
            <h1>Nom Propriete a</h1>
            <p>{props.nom}</p>
        </div>
    )
}
function DescriptionHouse(props){
    return(
        <div className="descriptionHouse">
          <h1>Description</h1>
          <p>{props.desciptionInfo}</p>
          <div>
                <h3>{props.klasman_title}</h3>
                <p><span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span></p>
          </div>
        </div>
    )
}

function ZonKomante(props){
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

function InfoHouse(props){
    return(
        <div className="container_houseinfo">
            <PrixUS  prixenUs={["25550 "]} annee={" /an"} index="1" negosye={[" negosyab"," Pa negosyab"]}/>
            <Name nom ={"Jean Jacques Kenley"} />
            <DescriptionHouse  desciptionInfo={["3 chanm akouche","1 salon", "1 sal a manje", " 2 douch"].join(", ")}  klasmans={["stars","stars"]} />
            <ZonKomante />
        </div>
    )
}

export default InfoHouse; 