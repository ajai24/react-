import React, { useState } from 'react';
import image from "C:/Users/LENOVO/Downloads/images.jpg";
import Data from './Data';

function Display() {
    const [name, setName] = useState('harish'); 
    const [showImage, setShowImage] = useState(false);
    const [names, setNames] = useState(['harish']); 

    const handleSubmit = () => {
        document.getElementById('name').innerHTML = `HI ${name}, I want to say the same truth 🙄`;
        setShowImage(false);
    };

    const iam_batman = () => {
        document.getElementById('name').innerHTML = "🦇🦇 HARISH IS BATMAN 🦇🦇";
        setNames((prevNames) => {
            const updatedNames = [...prevNames, name];
            console.log('Updated Names:', updatedNames); 
            return updatedNames;
        });
        setShowImage(true);
    };

    return (
        <div>
            <h1 id="name">HI BRO, I want to say the same truth 🙄</h1>
            {showImage && <img src={image} className="img" alt="batman" />}
            <button onClick={iam_batman}>What</button>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <Data names={names} />
        </div>
    );
}

export default Display;
