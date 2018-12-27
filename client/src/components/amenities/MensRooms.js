import React from 'react';

class MensRooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { MensRooms: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            MensRooms: !this.state.MensRooms
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.MensRooms ? "Amenities__button--color" : "Amenities__button"}>Chanm Gason</button>
    }
}

export default MensRooms;