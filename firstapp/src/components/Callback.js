import React, { useState } from 'react'

const Callback = ({getColor}) => {

    const[activeColor, setActiveColor1] = useState(null);

    const handleChange = (e)=>{
        const {value} = e.target;
        getColor(value);
        setActiveColor1(value);
    }

    return (
        <div>
            <label>Input color name: red, green, silver etc</label>
            <br/>
            <input type="text" id='input' aria-label="input" onChange={handleChange} value={activeColor}/>
        </div>
      )
}

export default Callback;