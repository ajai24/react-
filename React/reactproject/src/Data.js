function Data({ names })
{
    console.log(names);
    return (
        <div>
            <h1>People Know the truth🙄</h1>
            <ul>
                {Array.isArray(names) &&
                    names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
            </ul>
        </div> 
    );
}
export default Data