import React, { Component } from "react";
import { useState } from "react";



function ButtonClick() {
    const [data, setCounter] = useState({
        counter: 0,
        inc:"Increment",
        dec:"Decrement",
        greetingMessage: "Hello react am button component",
        alert:"am alert button work in function",
        clickbutton:"Click Button"
    })

    function buttonclicked() {
        alert(data.alert)
    }
    function increment() {
        setCounter((previousData) => ({ ...previousData, counter: previousData.counter + 1 }));

    }
    function decrement() {
        setCounter((previousData) => ({ ...previousData, counter: previousData.counter - 1 }));

    }
    return (
        <div>
            <h1>{data.greetingMessage}</h1>
            <button onClick={buttonclicked}>{data.clickbutton}</button>
            <span>Counter value:{data.counter}</span>
            <button onClick={increment} >{data.inc}</button>
            <button onClick={decrement}>{data.dec}</button>
        </div>
    );
}

export default ButtonClick;
