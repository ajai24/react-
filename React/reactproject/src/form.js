import { useState } from "react";

export default function Form1() {
    function formSubmit(event) {
        event.preventDefault();
        console.log('success............');
        alert('success');
    }

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
        <form onSubmit={formSubmit}>
            Name: 
            <input type="text" onChange={(data) => setName(data.target.value)} />
            
            <br />
            
            Roll Number: 
            <input type="text" onChange={(data) => setRoll(data.target.value)} />
            
            <br />
            
            Address: 
            <input type="text" onChange={(data) => setAddress(data.target.value)} />
            
            <br />
            
            <button type="submit">Signup</button>
        </form>
        
        <h1>The name is: {name}</h1>
        <h2>Roll Number: {roll}</h2>
        <h3>Address: {address}</h3>
        </>
    )
}