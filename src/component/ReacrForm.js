import React, { Component } from "react";
import { useState } from "react";
import './style.css';


function ReactForm() {
    const [form, setform] = useState({
        name: "random",
        phone: "",
        password: "",
        Department: "",
        postContent: " "


    })
    function handleChange(event) {
        setform((previousData) => ({ ...previousData, name: event.target.value }));
    }
    function handleChange1(event) {
        setform((previousData) => ({ ...previousData, phone: event.target.value }));
    }

    function handleChange2(event) {
        setform((previousData) => ({ ...previousData, password: event.target.value }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(form)
    }
    function handleChange2selectoption(event) {
        setform((previousData) => ({ ...previousData, Department: event.target.value }));
    }
    function textareachange(event) {
        setform((previousData) => ({ ...previousData, Department: event.target.value }));
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <label>
                    Name:
                    <input type="text" value={form.name} onChange={handleChange} />
                </label>
                <label>
                    Phone
                    <input type="text" value={form.phone} onChange={handleChange1} />
                </label>
                <label>
                    Department:
                    <select value={form.Department} onChange={handleChange2selectoption}>
                        <option value="CSIT">CSIT</option>
                        <option value="Software">Software</option>
                        <option value="Engineering">Engineering</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>
                </label>
                <label>
                    password:
                    <input type="text" value={form.password} onChange={handleChange2} />
                </label>
                <label>
                    <textarea
                        value={form.postContent} // ...force the input's value to match the state variable...
                        onChange={textareachange} // ... and update the state variable on any edits!
                    />
                </label>

                <lable><input type="submit" value="Submit" /></lable>
            </form>
        </div>
    );
}

export default ReactForm;
