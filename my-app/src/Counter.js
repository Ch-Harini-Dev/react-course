import React, { useState } from "react";
import Student from "./Student.js"

function Counter() {
    const [counter, setCounter] = useState(10);
    // setCounter(10);
    const [text,setText] = useState('');

    // function handleClick() {
    //     alert('Button Clicked');
    //     setCounter(10);
    // }

    function handleIncrement() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function handleDecrement() {
        setCounter(prevCounter => prevCounter - 1);
    }
    
    function handleReset() {
        setCounter(0);
    }

    function handleInputChange(event) {
        setText(event.target.value);
    }

    return(
        <>
        <label htmlFor="line-Input">Type</label>
        <input 
        type="text"
        id="unique"
        value={text}
        onChange= {handleInputChange} />
        <p>You are Typing {text}</p>
        Counter is {counter}
        {/* <button onClick={handleClick}>Click</button> */}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <Student name="Harini" classText="React" grade="A" counter={counter}/>
        </>
    );
}

export default Counter;