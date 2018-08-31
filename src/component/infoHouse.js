import React from 'react';
import mapboxgl from 'mapbox-gl';





function PrixUS(props){

    return(
        <div className="PrixUs">
            <div>
                <h3>{props.title}</h3>
                <p>{props.prixenUs} {props.annee} {props.negosye[props.index]}</p>
            </div>
            
         
        </div>
    )
}
function Name(props){
    return(
        <div className="Name">  
            <h3>{props.header}</h3>
            <p>{props.nom}</p>
        </div>
    )
}
function DescriptionHouse(props){
    return(
        <div className="descriptionHouse">
          <h3>{props.header}</h3>
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
class Map extends React.Component {
  componentDidMount() {

mapboxgl.accessToken = 'pk.eyJ1IjoicGllcnJlbHN0YW4iLCJhIjoiY2psOTl6ZzMxMDh4eDN2cnVvNmxucWxqcCJ9.HMEr8v5K' +
        '0ltMPFRm5pwX5A';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style ={
        position: 'static',
        height : '300px',
        marginBottom: '90px'
    };

    return (
 
           
            <div style={style} ref={el => this.mapContainer = el}>
                <h3 className="lokalization"> lokalizasyon kay la </h3>
            </div>
      
    )
  }
}



function ZonKomante(props){
    return (
        <div>
           
<div className = "ajoute_yon_komante" > <h3 className="zon_yon_komante_title">Zon komante</h3>
</div>
            <h3 className="ajoute_yon_komante_title">Ajoute yon komante</h3>
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
            <PrixUS title="Prix en Us" prixenUs={["25550 "]} annee={" /an"} index="1" negosye={[" negosyab"," Pa negosyab"]}/>
            <Name header = "Nom Propriete a" nom ={"Jean Jacques Kenley"} />
            <DescriptionHouse header="Description" klasman_title="Klasman" desciptionInfo={["3 chanm akouche","1 salon", "1 sal a manje", " 2 douch"].join(", ")}  klasmans={["stars","stars"]} />
            <Map />
            <ZonKomante />
     
        </div>
    )
}

export default InfoHouse;