import React from 'react';
import { Price, PreviewImage,Owner,Address,Description,Rating,Actions }  from './HouseInfos';
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
                <PreviewImage url={this.props.previewImage} />
                <div className="house-card__inner-wrapper">
                    <Price value={this.props.price} currency={this.props.currency} leaseType={this.props.leaseType}/>
                    <Owner name={this.props.ownerName}/>
                    <Address value={this.props.address} />
                    <Description numberOfBedrooms={this.props.numberOfBedrooms} numberOfBathrooms={this.props.numberOfBathrooms} />
                    <Rating value={this.props.rating} />
                    <Actions/>
                <button className="house-card__submit button" type="submit">PLIS DETAY</button>
            </div>
        </div>
    )
}
}

export default House;