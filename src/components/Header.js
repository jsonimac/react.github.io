
let menus = ["Home", "Products", "About", "Login"];
let list = menus.map((item)=><li>{item}</li>);
function Header(){
    return (
        <div>
            <ul>
                {list}
            </ul>
            <h2>This is header</h2>
            <hr/>
        </div>
        
    );    
}

export default Header;