import React from 'react';

class Parking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Parking: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Parking: !this.state.Parking
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Parking ? "Amenities__button--color" : "Amenities__button"}>Paking</button>
    }
}
export default Parking;