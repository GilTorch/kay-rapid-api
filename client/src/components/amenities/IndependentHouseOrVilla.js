import React from 'react';

class IndependentHouseOrVilla extends React.Component {
    constructor(props) {
        super(props);
        this.state = { IndependentHouseOrVilla: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            IndependentHouseOrVilla: !state.IndependentHouseOrVilla
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.IndependentHouseOrVilla ? "Amenities__button--color" : "Amenities__button"}>Kay endepan</button>
    }
}

export default IndependentHouseOrVilla;