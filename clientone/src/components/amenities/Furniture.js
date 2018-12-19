import React from 'react';

class Furniture extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Furniture: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Furniture: !this.state.Furniture
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Furniture ? "Amenities__button--color" : "Amenities__button"}>M&egrave;b</button>
    }
}
export default Furniture;
