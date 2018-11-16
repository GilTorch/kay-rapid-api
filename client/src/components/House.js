import React from 'react';


class House extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            liked: true
        }
    }

    changeColor() {
        this.setState({ liked: !this.state.liked })
    }

    render() {
        let btn_class = this.state.liked ? "whiteButton" :"redButton";
         return (
            <div className="wallsHouse__card"> 
        <div className="cardProfileHouses">
            <div className="PhotoProfileHousesAndPrice">
                <ul>
                    <li>
                <img src={this.props.image} alt="" />
                    </li>
                    <li><h2>Prix en Us</h2></li>
                    <li><p>{this.props.price} {this.props.currency}/{this.props.leaseType}</p></li>
                </ul>
            </div>
            <div>
                <ul className="infosHouseCard">
                  <div className={btn_class} onClick={this.changeColor.bind(this)} ><span><i className="fas fa-heart"></i></span></div>
                    <li><h2>Propriyetè a:</h2><span>{this.props.ownerName}</span></li>
                    <li><h2>Adrès:</h2> <span>{this.props.address}</span> </li>
                    <li><h2>Deskripsyon:</h2><span>{this.props.description}</span> </li>
                    <li>
                        <h2>Klasman:<span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </h2> 
                    </li>
                    <li>
                        <span className="icons"><i className="fas fa-map-marker-alt"></i></span>Gade zòn nan sou yon map</li>
                    <li>
                        <span className="icons"><i className="fas fa-eye"></i></span>Vizitel ak telefòn ou!
                    </li>
                    <li><span className="icons"><i className="fas fa-camera"></i></span>Gade kèk foto/video kay la</li>
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

export default House;