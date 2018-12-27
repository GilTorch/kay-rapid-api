import React from 'react';

class Villa extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Villa: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Villa: !state.Villa
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Villa ? "Amenities__button--color" : "Amenities__button"}>Villa</button>
    }
}
export default Villa;