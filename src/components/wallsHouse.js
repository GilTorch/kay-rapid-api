import React from 'react';

class HouseProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            red: true
        }
    
    }
    changeColor() {
        this.setState({ red: !this.state.red })
    }

    render() {
        let btn_class = this.state.red ? "whiteButton" :"redButton";
         return (
            <div className="card"> 
        <div className="cardProfileHouses">
                <div className="PhotoProfileHousesAndPrice">
                    
                <ul>
                    <li>
                <img src={this.props.image} alt="" />
                    </li>
                    <li><h2>Prix en Us</h2></li>
                    <li><p>{this.props.PrixHouseUs}</p></li>
                </ul>
            </div>

            <div>
             
                <ul className="infosHouseCard">
                             <div className={btn_class} onClick={this.changeColor.bind(this)} ><span><i class="fas fa-heart"></i></span></div>
                    <li><h2>Propriyetè a:  </h2><span>{this.props.nom.NomPropriete}</span></li>
                    <li><h2>Adrès</h2> <span>{this.props.address}</span> </li>
                    <li><h2>Deskripsyon</h2><span>{this.props.description}</span> </li>
                    <li><h2>klasman <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </h2> </li>

                    <li>
                            <span className="icons"><i class="fas fa-map-marker-alt"></i></span>Gade zòn nan sou yon map</li>
                    <li>
                            <span className="icons"><i class="fas fa-eye"></i></span>Vizitel ak telefòn ou!
                        </li>
                        <li><span className="icons"><i class="fas fa-camera"></i></span>Gade kèk foto/video kay la</li>
                </ul>
                
               
            </div>
            
         
        </div>
        <div className="center-Button">
                <button className="button" type="submit">M'enterese</button>
        </div>
           
        </div>
    )
}
}
class CardHouses extends React.Component {
    render() {
        return (
            <div>
                <HouseProfile PrixHouseUs={houseinfo.PrixHouseUs} image={houseinfo.image}
                    nom={houseinfo.ProfilePropriete} address={houseinfo.Address} description={houseinfo.Description} />
                <HouseProfile PrixHouseUs={houseinfo.PrixHouseUs} image={houseinfo.image}
                    nom={houseinfo.ProfilePropriete} address={houseinfo.Address} description={houseinfo.Description} />
                <HouseProfile PrixHouseUs={houseinfo.PrixHouseUs} image={houseinfo.image}
                    nom={houseinfo.ProfilePropriete} address={houseinfo.Address} description={houseinfo.Description} />
            </div>
        )

    }
    
   
    }
   


const houseinfo = {
    image:"https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a1532b84f66efdf63f7af7b1f0493f5&auto=format&fit=crop&w=1458&q=80/&text=slide1",
    PrixHouseUs: "3500 US /an",
    Address: "Fermath",
    Description: "4 chanm a kouche, 1 salon, 2 twalet",
    ProfilePropriete : {
        NomPropriete: "Jean Jacques"
    }
   
}
  



export default CardHouses;