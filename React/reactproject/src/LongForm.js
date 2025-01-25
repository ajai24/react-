import { useState } from "react";
export default function LongForm() {

    const [data, setData] = useState({ 
        name: '',
        city: '',
        state: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        alert(`Form submitted successfully! ${data.name} ${data.city} ${data.state}`);
    }
    const updateData = (e) => {
        var variable = e.target.value;
        var name = e.target.name;
        setData({ ...data, [name]: variable });
    }   
    return (
        <div>
            <h1>Long Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Your Name:</label>
                <input type="text" name="name" value={data.name} onChange={updateData} />
                <br />
                <label>Enter Your City:</label>
                <input type="text" name="city" value={data.city} onChange={updateData} />
                <br />
                <label>Enter Your State:</label>
                <input type="text" name="state" value={data.state} onChange={updateData} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}