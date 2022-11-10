import React, {useState, useEffect} from "react";

function ApiDisplay() {
    const [city, setCity] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/test-api/')
        .then(response => response.json())
        .then((data)=>{
            setCity(data);
        }).catch((err)=>{console.log(err.message)})
    },[]);

    return (
        <div>
            {/* <select>
                {city.map((item,key)=>{
                    return(
                        <option key={key}>
                            {item.mun_code}
                        </option>
                    )
                })}
            </select> */}
                {city.map((item,key)=>{
                    return(
                        <>
                            <img width="200px" height="auto" src={item.image} alt={item.name} key={key}></img>
                        </>
                            
                    )
                })}
        </div> 
    );
}

export default ApiDisplay;