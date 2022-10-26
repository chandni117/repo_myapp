import React from 'react'
import { useReducer } from 'react';

const initialState = { count: 0, name: 'chiki' }
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...state, count: state.count + action.payload };
        case 'Decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({ type: 'Increment', payload: 5 })}>+</button>
        <span>Count: {state.count}</span>
        <button onClick={() => dispatch({ type: 'Decrement', payload: 10 })}>-</button>
    </>
    )
}


export default Counter;