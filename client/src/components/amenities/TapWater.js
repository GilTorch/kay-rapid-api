import React from 'react';

class TapWater extends React.Component {
    constructor(props) {
        super(props);
        this.state = { TapWater: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            TapWater: !this.state.TapWater
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.TapWater ? "Amenities__button--color" : "Amenities__button"}>Tiyo</button>
    }
}
export default TapWater;