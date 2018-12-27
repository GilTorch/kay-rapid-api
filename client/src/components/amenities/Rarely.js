import React from 'react';

class Rarely extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Rarely: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Rarely: !state.Rarely
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Rarely ? "Amenities__button--color" : "Amenities__button"}>Raman</button>
    }
}
export default Rarely;