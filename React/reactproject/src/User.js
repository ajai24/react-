import { useParams, useNavigate } from "react-router-dom";
import LongForm from "./LongForm";
import Form1 from "./form";
export default function User() {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>User is {id}</h1>
            <button onClick={() => navigate('/Form')}>Login</button>
        </div>
    );
}
