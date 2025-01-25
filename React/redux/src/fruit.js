import { useSelector } from "react-redux"

export default function Fruit() {
    const fruit = useSelector((state) => state.fruitInfo.fruit)
    console.log ('The fruit is:', fruit);
    return (
        <div>
            <h1> Fruit Name is</h1>
        </div>
    )
}