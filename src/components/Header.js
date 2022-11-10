import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.menus = ["Home", "About", "Contact Us", "Login"];
    }
    
    render() {
        return ( 
            <div>
                <img src={this.props.path} alt="image_logo"></img>
                <ul>
                    {this.menus.map(menu =>(
                        <li>{menu}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Header;

// let menus = ["Home", "Products", "About", "Login"];
// let list = menus.map((item)=><li>{item}</li>);
// function Header(){
//     return (
//         <div>
//             <ul>
//                 {list}
//             </ul>
//             <h2>This is header</h2>
//             <hr/>
//         </div>
        
//     );    
// }

// export default Header;