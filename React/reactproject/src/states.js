import { useState } from 'react';

export default function States() {
    const [data, setdata] = useState({
        name: "harish",
        age: 20,
        department: "Ai-ds"
    });
    let[arr,setarr]=useState([1,2,3]);
    return (
        <div>
            <h1>My Name is {data.name}, My age is {data.age}, Iam from {data.department}</h1>
            <button onClick={() => {
                setdata({
                    ...data,
                    name: "Kamalesh" 
                });
            }}>Change the name</button>
            <br />
            <button onClick={() => {
                setdata({
                    ...data,
                    age: 19 
                });
            }}>Change the age</button>
            <br />
            <button onClick={() => {
                setdata({
                    ...data,
                    department: "CSE" 
                });
            }}>Change the department</button>
            <br />
            {arr.map((item) => (
                <h1>{item}</h1>
            ))}
            <button onClick={() => {
                setarr(arr.map(item => item + 10));
            }}>Add</button>
        </div>
    );
}
