import React from 'react';
import Sliders from './carousel';

function Price(props){

    return(
        <div className="InfoHouse__price">
           
            <div>
                <h1>Prix en Us</h1>
                <p>{props.prixenUs} {props.annee} {props.negosye[props.index]}</p>
            </div>
            
         
        </div>
    )
}
function Name(props){
    return(
        <div className="InfoHouse__name">  
            <h1>Nom Propriete a</h1>
            <p>{props.nom}</p>
        </div>
    )
}
function Description(props){
    return(
        <div className="InfoHouse__description">
          <h1>Description</h1>
          <p>{props.desciptionInfo}</p>
          <div>
                <h3>{props.klasman_title}</h3>
                <p><span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span></p>
          </div>
        </div>
    )
}



function Comment(){
    return (
       
           
<div > 
    <h1>Zon komante</h1>

            <h2>Ajoute yon komante</h2>
                <form className="InfoHouse-Comment__form">
                <textarea className="InfoHouse-comment__form--textarea" id="subject" name="subject"> </textarea>
                <input className="InfoHouse__Button InfoHouse__Button--color " type="submit" value="Soumet" ></input>
                </form>
               
            </div>
       
    )
}

function InfoHouse(props){
    return(
        <div>
            <Sliders />
            <div className="InfoHouse--margin-left-right">
               
                <Price prixenUs={["25550 "]} annee={" /an"} index="1" negosye={[" negosyab", " Pa negosyab"]} />
                <Name nom={"Jean Jacques Kenley"} />
                <Description desciptionInfo={["3 chanm akouche", "1 salon", "1 sal a manje", " 2 douch"].join(", ")} klasmans={["stars", "stars"]} />
                <Comment />

            </div>
        </div>
        
    )
}

export default InfoHouse; 