import { useSelector } from "react-redux";
import { resetArray } from "./slices/arraySlice";
import { useDispatch } from "react-redux";

export default function ResetArray() {
    const dispatch = useDispatch();

    const arr = useSelector((state) => state.arrayInfo.array)
    console.log ('The Array is:', arr);
    return (
        <>
        {arr.map((item,key) => (
        <h1 key={key}>{JSON.stringify(item)}</h1>
        ))}
        <br />
        <div>
            <button onClick={() => dispatch(resetArray())}>Reset Array</button>
        </div>
        </>
    )
}