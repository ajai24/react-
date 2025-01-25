import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setArray } from "./slices/arraySlice";

export default function Array() {
    const dispatch = useDispatch();

    const [array, setArr] = useState([]);
    const [increment, setIncrement] = useState(0);
    useEffect(() => {
        setIncrement(increment + 1);
    }, [array]);
    return (
        <div>
            <h1> Array </h1>
            <button onClick={() => setArr([...array,increment ])}>Add</button>
            <br />
            <button onClick={() => {
                dispatch(setArray(array))
                setArr([])
            }}>Add on Main</button>
            <div>
                <h1>Array Value: [{array}]</h1>
            </div>
        </div>
    );
}