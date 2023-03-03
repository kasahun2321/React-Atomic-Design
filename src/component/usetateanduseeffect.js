import React, { Component, useEffect, useState } from "react";



function UsestateUsefect() {
    const [data, setCounter] = useState([])


    function deleterow(id) {
        alert(id)

        //setCounter((previousData) => ({ ...previousData, datadb: previousData.counter + 1 }));
    }
    function updaterow(id) {
        alert(id)
        data=data.map((ele,i)=>{
            if(ele.id==id)
            {
               return {...ele, title:"kasahun"}
            }
            return ele;

        })
        // setCounter((previousData) => ({ ...previousData, datadb: previousData.counter + 1 }));
    }
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)

                setCounter(json);
                console.log("my data", data)
            })
    }, [FormData])
    return (
        <div>
            <h1>{data.message}</h1>
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th colspan="2">CRUD</th>
                    </tr>
                </thead>

                <tbody >
                    {
                        data.length > 1 ? data.map(ele => {
                            while (ele.id < 10) return (
                                <tr key={ele.id}>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.completed?"True":"False"}</td>
                                    <td><button style={{ color:"green"}}onClick={()=>updaterow(ele.id)}>Update</button></td>
                                    <td><button style={{ color:"red"}}onClick={()=>deleterow(ele.id)}>Delete</button></td>
                                </tr>)
                        }) : "loading ......"
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsestateUsefect;
