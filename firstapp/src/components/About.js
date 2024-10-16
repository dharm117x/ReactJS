import React, { useState } from 'react'
import Callback from './Callback';

export default function About(){

  const [UIColor, setUIColor] = useState(null);

  const getColor =  (c)=> {
      setUIColor(c);
  }

  return (
    <div className="container">
        <div>About React</div>
        
        <p>
            Its good way to understatd react by doing its selef.
        </p>
        <div className="color_box_container" style={{ background: `${UIColor}`}}></div>
        <Callback getColor={getColor}/>
    </div>
    
  )
}
