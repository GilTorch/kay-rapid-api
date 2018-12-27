import React from 'react';

class Always extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Always: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Always: !this.state.Always
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Always ? "Amenities__button--color" : "Amenities__button"}>Toutan</button>
    }
}
export default Always;