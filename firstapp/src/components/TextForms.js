import React, { useState } from 'react'


export default function TextForms(props) {
    const[text, setText] = useState('Enter text here');

    //setText('Hello react World');

    const toUpper = ()=>{
        console.log('To upper case');
        setText(text.toUpperCase())
    }

    const toUpdate = (event)=>{
        console.log('To update data');
        setText(event.target.value);
    }
    
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' id='box1' value={text} onChange={toUpdate} rows={8}></textarea>
        </div>
        <button className="btn btn-primary" onClick={toUpper}>To Uppercase</button>
        <div className="container">
            <h2>Preview</h2>
            {text}
        </div>
    </div>


  );


}

