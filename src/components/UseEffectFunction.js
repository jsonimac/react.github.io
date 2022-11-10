import React, { useState, useEffect } from "react";
 
function UseEffectFunction() {
    const [value, setValue] = useState(false);
    const [value1, setValue1] = useState(false);
    useEffect(() => {
      console.log("effect");
      return () => {
        console.log("clean up");
      };
    }, [value1]);
   
    const clickHandler = () => {
        // setValue(prev=>!prev);
        setValue1(prev=>!prev);
    }
   
    return (
      <div>
        <h1>{value1 ? "hello" : "hey"}</h1>
        <button onClick={clickHandler}>click me</button>
      </div>
    );
}

export default UseEffectFunction;