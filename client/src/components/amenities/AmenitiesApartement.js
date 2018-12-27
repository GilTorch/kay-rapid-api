import React from 'react';

class AmenitiesApartement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Apartement: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Apartement: !this.state.Apartement
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Apartement ? "Amenities__button--color" : "Amenities__button"}>Apatman</button>
    }
}
export default AmenitiesApartement ;