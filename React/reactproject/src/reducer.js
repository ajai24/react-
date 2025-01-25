import { useReducer } from "react";

function Reducer()
{
    const transactionReducer = (balance,action)=>
    {
        switch(action.type)
        {
            case 'deposit':
                return balance + action.amount
            case 'withdraw':
                return balance - action.amount
        }
    }
    const[balance,action]= useReducer(transactionReducer,5000)
    return (
        <div>
            <h1>Balance is {balance}</h1>
            <button onClick={() => {
                action({ type: "deposit", amount: 500 })
            }}>Deposit</button>
            <button onClick={() => {
                action({ type: "withdraw", amount: 500 })
            }}>Withdraw</button>
        </div>
    ) 
}
export default Reducer