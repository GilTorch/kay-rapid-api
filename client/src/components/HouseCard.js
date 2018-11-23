import React from 'react';
import { Price, PreviewImage,Owner,Address,Description,Rating,Actions,Heart }  from './HouseInfos';
import '../css/house-card.css';

class HouseCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            liked: true
        }
        this.changeColor=this.changeColor.bind(this);
    }

    changeColor() {
        this.setState({ liked: !this.state.liked })
    }

    render() {
         return (
            <div className="house-card"> 
                <Heart value={this.state.liked} like={this.changeColor}/>
                <PreviewImage url={this.props.previewImage} />
                <div className="house-card__inner-wrapper">
                    <Price value={this.props.price} currency={this.props.currency} leaseType={this.props.leaseType}/>
                    <Owner name={this.props.ownerName}/>
                    <Address value={this.props.address} />
                    <Description 
                        numberOfBedrooms={this.props.numberOfBedrooms} 
                        numberOfBathrooms={this.props.numberOfBathrooms} 
                        numberOfLivingrooms={this.props.numberOfLivingrooms}
                        numberOfDiningrooms={this.props.numberOfDiningrooms}
                    />
                    <Rating value={this.props.rating} />
                    <Actions/>
                <button className="house-card__submit button" type="submit">PLIS DETAY</button>
            </div>
        </div>
    )
}
}

export default HouseCard;