import React from "react";


const LocationHouses =()=> {
 return (
     <div className="LocationHousesContainer">
         <div className="iconFasTimes"><span><i className="fas fa-times"></i></span></div>
         <div>
             <h1>Map chache yon kay nan</h1>
             <div className="input-container">
                 <i class="fas fa-search icon"></i>
                 <input className="input-field" type="text" placeholder="Bay nom la , Oswa zon vil la"/>
             </div>
            
             <LocationByVille TopVille={TopVille} />
             <LocationByTown  Town ={Town}/>
         </div>
     </div>
 )
}

const LocationByVille = (props)=> {
 const Ville = props.TopVille;
    const listVille = Ville.map((Ville) =>
        <li>{Ville}</li>
    );
    return (
        <div>
            <h1>T&#242;p vil</h1>
            <div>
                <ul>{listVille}</ul>
            </div>

        </div>
    )
}
const Town = ['Delmas','Petion-Ville','Kafou'];
const TopVille = ["Port-au-Price", "Jeremi", "Jacmel", "Okap"];

const LocationByTown = (props)=> {
    const TownLocation = props.Town;
 const TopTown = TownLocation.map((town)=> {
    return <li>{town}</li>
 })
 return (
     <div>
         <h1>Komin</h1>
         <div>
             <ul> {TopTown}</ul>
         </div>
        
     </div>
 )
}

export default LocationHouses;