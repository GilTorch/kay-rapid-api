import React from 'react';

class Counters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Counters: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            Counters: !this.state.Counters
        }));
    }
    render() {
        return <button onClick={this.handleClick} className={this.state.Counters ? "Amenities__button--color" : "Amenities__button"}>Kont&egrave;</button>
    }
}
export default Counters;