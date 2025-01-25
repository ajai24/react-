// Child4 component
import { useState, useReducer, useEffect } from 'react';

function Child4({ names }) {
    const iterateReducer = (state, action) => {
        switch (action.type) {
        case 'increment':
            return {
            roll: state.roll + 1,
            name: names[state.roll +1],
            };
        case 'decrement':
            return {
            roll: state.roll - 1,
            name: names[state.roll - 1],
            };
        default:
            return state;
        }
    };

    const [state, dispatch] = useReducer(iterateReducer, { roll: 1, name: names[1] });

    return (
        <div>
        <h1>Student Name: {state.name} | Roll number: {state.roll > 30 ? state.roll + 1 : state.roll}</h1>
        <br />
        <button onClick={() => dispatch({ type: 'increment' })}>Next Student</button>
        <br />
        <button onClick={() => dispatch({ type: 'decrement' })}>Previous Student</button>
        </div>
    );
    }

export default Child4;
