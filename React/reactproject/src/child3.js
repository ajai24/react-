// Child3 component
import Child4 from './child4';
import Day4 from './Day4';

function Child3({ names }) {
    const arr = ["harish", "kamalesh", "Ajay", "K7"];
    return (
        <>
            <div>
                <h1>Day 4</h1>
                <ul>
                    {arr.map((name, index) => (
                        <li key={index}><Day4 name={name} /></li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Child3;
