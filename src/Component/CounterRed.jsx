import React, { useReducer } from 'react'
import "./counterred.css"

const initialState = 0;
const reducer = (state, action) => {
     if(action.type === "INC") {
         return state +1;
     }
     if(action.type === "DEC"){
         return state-1;
     }
     return state;
}

const CounterRed = () => {
    const [state,dispatch] = useReducer(reducer, initialState);
  return (
        <div className="container" >
          <h1 className='textdes5'>UseReducer Example</h1>
        <div className="design4">
        <button className="btn3" onClick={()=> dispatch({type: "INC"})}>Increment 1</button>
        <button className="btn4" onClick={()=> dispatch({type: "DEC"})}>Decrement 1</button>
        </div>
        <h1 className='textdes4'>{state}</h1>
    </div>
  )
}

export default CounterRed