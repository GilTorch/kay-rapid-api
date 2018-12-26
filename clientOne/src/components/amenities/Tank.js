import React from 'react';

class Tank extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Tank: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Tank: !this.state.Tank
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Tank ? "Amenities__button--color" : "Amenities__button"}>Res&egrave;vwa</button>
    }
}
export default Tank;