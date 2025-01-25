import { useState } from "react";

export default function Form2() {
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

    return (
        <div>
            <h1>Form2</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Your Name:</label>
                <input type="text" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <br />
                <label>Enter Your City:</label>
                <input type="text" name="city" value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} />
                <br />
                <label>Enter Your State:</label>
                <input type="text" name="state" value={data.state} onChange={(e) => setData({ ...data, state: e.target.value })} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
