import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./slices/userSlices";

export default function Login() {

    const dispatch = useDispatch();

    const [Input, setInput] = useState(
        {
            username: "",
            password: ""
        }
    );



    const addUser = (formdata) => {
        formdata.preventDefault();
        dispatch(setUsers(Input));
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Input);
    }
    const updateInput = (e) => {
        let variable = e.target.value
        let name = e.target.name
        setInput({
            ...Input,
            [name]: variable
        })
    }

    return(
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                Name:
                <input type="text" name="username" placeholder="Enter username" value={Input.username} onChange={updateInput}/>
                <br />
                Password:
                <input type="password" name="password" placeholder="Enter password" value={Input.password} onChange={updateInput}/>
                <br />
                <button type="submit" onClick={addUser}>Login</button>
            </form>
        </div>
    )
}