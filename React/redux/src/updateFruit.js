import { useDispatch } from "react-redux";
import { setFruit } from "./slices/fruitSlice";
import { useState } from "react";

export default function UpdateFruit() {
    const dispatch = useDispatch();
    const [fruits, setFruits] = useState("")
    const addFruit = (formdata)=>{
        formdata.preventDefault();
        dispatch(setFruit(fruits));
    }

    return (
        <>
        <div>
            <h1>Update Fruit</h1>
            <form>
                <label>Fruit name:</label>
                <input type="text" name="fruit" value = {fruits} onChange={(e)=>setFruits(e.target.value)}/>
                <br/>
                <button onClick={addFruit}>Add</button>
            </form>
            
            
        </div>
                    <div className="container mt-5">
            <div className="card p-4 shadow-lg animated-card">
                <h2 className="text-center mb-4 animated-title">Contact Us</h2>
                <form>
                <div className="form-group animated-input">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    required 
                    />
                </div>
                <div className="form-group animated-input">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    required 
                    />
                </div>
                <div className="form-group animated-input">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block animated-button">
                    Submit
                </button>
                </form>
            </div>
            </div>

            </>
    )
}

