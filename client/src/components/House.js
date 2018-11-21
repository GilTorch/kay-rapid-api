import React from 'react';
import '../css/house.css';

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
            <div className="house-card"> 
                <div className="house-card__image-preview-container">
                    <img className="house-card__image-preview" src={this.props.image} alt="" />
                </div>
                <div className="house-card__inner-wrapper">
                <div className="house-card__price-container">
                    <h2>Pri</h2>
                    <span className="house-card__price">{this.props.price} {this.props.currency}/{this.props.leaseType}</span>
                </div>
                <div className="house-card__owner-group">
                    <h2>Propriyetè a</h2>
                    <span className="house-card__owner-name">{this.props.ownerName}</span>
                </div>
                <div className="house-card__address-group">
                    <h2>Adrès</h2>
                    <span className="house-card__address">{this.props.address}</span>
                </div>
                {/* <div className="house-card__description-group">
                    <h2>Deskripsyon</h2>
                    <span className="house-card__description">
                        {this.props.numBathRooms} sal de ben, {this.props.numBedRooms} chanm a kouche
                    </span> 
                </div>
                <div className="house-card__rating-group">
                    <h2>Klasman</h2> 
                    <div className="house-card__rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div> */}
                {/* <div className="house-card__actions">
                    <span className="icons"><i className="fas fa-map-marker-alt"></i> Gade zòn nan sou yon map</span>
                    <span className="icons"><i className="fas fa-eye"></i> Vizitel ak telefòn ou!</span>
                    <span className="icons"><i className="fas fa-camera"></i> Gade kèk foto/video kay la</span>
                </div>
                */}
                <button className="house-card__submit button" type="submit">PLIS DETAY</button>
            </div>
        </div>
    )
}
}

export default House;