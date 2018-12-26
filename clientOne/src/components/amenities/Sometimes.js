import React from 'react';

class Sometimes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Sometimes: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Sometimes: !this.state.Sometimes
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Sometimes ? "Amenities__button--color" : "Amenities__button"}>K&egrave;k Fwa</button>
    }
}
export default Sometimes;
