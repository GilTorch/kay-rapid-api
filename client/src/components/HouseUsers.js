import React from 'react';

const  HouseUser =()=> {
    return (
      <div className="CardHouseUser--marginBottom">
        <div className="CardHouseUser">
          <Image img={houseinfo.image.img} alt={houseinfo.image.name}/>
          <Price price={houseinfo.PrixHouseUs} />
          <InfoHouse name={houseinfo.ProfilePropriete.NomPropriete} 
           address={houseinfo.Address}
           description={houseinfo.Description}
           />
        </div>
      </div>
    )
}
const Image = (props)=> {
  return <img className="CardHouseUser__image" src={props.img} alt={props.alt} />;
  
}
const Price = (props)=> {
  return (
  <div className="PriceTitle">
      <h1>Prix en $Us /an</h1>
      <p className="PriceTitle__Amount">{props.price}</p>
  </div>);
  }

const InfoHouse =(props) =>{
  return (
  <div>
      <ul className="list">
        <li className="list__item ">
          <h1>Propriyetè a: </h1>
          <span>{props.name}</span>
        </li>
        <li className="list__item">
          <h1>Adrès:</h1> <span>{props.address}</span>
        </li>
        <li className="list__item">
          <h1>Deskripsyon:</h1>
          <span>{props.description}</span>
        </li>
        <li className="list__item">
          <h1>klasman: </h1>

          <span className="fa fa-star checked list__span" />
          <span className="fa fa-star checked list__span" />
          <span className="fa fa-star checked list__span" />
          <span className="fa fa-star list__span" />
        </li>

        <li className="list__item">
          <span>
            <i className="fas fa-map-marker-alt list__icons list__icons--color" />
          </span>
          Gade zòn nan sou yon map
        </li>
        <li className="list__item">
          <span>
          <i className="fas fa-eye list__icons list__icons--color " />
          </span>
          Vizitel ak telefòn ou!
        </li>
        <li className="list__item">
          <span>
          <i className="fas fa-camera list__icons list__icons--color" />
          </span>
          Gade kèk foto/video kay la
        </li>
      </ul>
      <h1 className="offer-title ">
          Ou gen 1 &ograve;f sou kay la
      </h1>
      <OfferButton />
    </div>
  );
}






const OfferButton = () => {
  
  return (
    <div className="Button-Offer--margin">
      <p>
        <button className="Button-Offer">Gade &ograve;f ou Yo</button>
      </p>
      <p>
        <button className="Button-Modify"> Modifye Kay la</button>
      </p>

    </div>
  ) 
}

const houseinfo = {
    image:{
      name:"House",
     img:"https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a1532b84f66efdf63f7af7b1f0493f5&auto=format&fit=crop&w=1458&q=80/&text=slide1",
    
     },
     PrixHouseUs: "3500 US /an",
    Address: "Fermath",
    Description: "4 chanm a kouche, 1 salon, 2 twalet",
    ProfilePropriete: {
        NomPropriete: "Jean Jacques"
    }

}



export default HouseUser; 
