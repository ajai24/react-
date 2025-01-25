import { useState ,useEffect} from "react";

function Test() {
    const [count1, setcount1] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(()=>
    {
        console.log("useEffect called");
        if (count1===10)
        {
            setcount1(0);
        }
    },[count1])
    return (
        <div>
            <h1>Count 1 is {count1} and Count 2 is {count}</h1>
            <button onClick={() => setcount1(count1 + 1)}>Change Name</button>
            
            <button onClick={() => setCount(count + 1)}>Change Count</button>
        </div>
    );
}
export default Test