import React, { useEffect, useState } from 'react'
import "./counter.css"
//Useeffect Example
const Counter = () => {
  const [numinc,setNumInc] = useState(0);
  useEffect(()=> {
    alert("Clicked");
  },[numinc])

  return (
    <div className="container" >
      <h1 className='textdes1'>UseEffect Example</h1>
    <div className="design1">
    <button className="btn1" onClick={()=> setNumInc(numinc+1)}>Increment 1</button>
    <button className="btn2" onClick={()=> setNumInc(numinc-1)}>Decrement 1</button>
    </div>
    <h1 className='textdes'>{numinc}</h1>
</div>
  )
}

export default Counter
