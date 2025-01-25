import { useSelector } from "react-redux";

export default function User() {
    const user = useSelector((state) => state.userInfo.user)
    console.log ('The user is:', user);
    return (
        <>
        {user.map((item,key) => {
            return(
                <div key={key}>
                    <h1>Name :{item.username}</h1>
                    <h1>Password:{item.password}</h1>
                </div>
            )

        })}
        </>
        
    )
}