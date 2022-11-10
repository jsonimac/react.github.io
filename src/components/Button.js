import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            onOff: "On",
            name: "Jessie"
         };
    }

    changeState = () => {
        this.setState({
            onOff: this.state.onOff === "Off" ? 'On' : 'Off',
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.changeState}>
                    {this.state.onOff}
                </button>
            </div>
            
        );
    }
}
export default Button;