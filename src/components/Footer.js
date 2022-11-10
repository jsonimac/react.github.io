import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
            <div>
                <h1>{this.props.descript}</h1>
            </div> 
        );
    }
}
 
export default Footer;

