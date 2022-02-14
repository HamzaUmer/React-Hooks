import React, { useState } from 'react'
import './toggle.css';
//UseState Hook Example
const ToggleButton = () => {
    const [bgcolor, setBGcolor] =useState({
        backgroundColor : "white"
    }); 
    const [btnStyle, setBtnStyle] = useState ({
            backgroundColor:"black",
            color: "white"
    });
    const [btnText,setBtnText] = useState("Click to Black");
    const [headStyle, setHeadStyle]= useState({
            color:"black"
    })
    const colorChange = ()=> {
        if(bgcolor.backgroundColor === "white"){
            setBGcolor({backgroundColor: "black"});
            setBtnStyle({backgroundColor:"white", color:"black"});
            setBtnText("Click to White");
            setHeadStyle({color:"white"});
        }
        else {
            setBGcolor({backgroundColor: "white"});
            setBtnStyle({backgroundColor:"black", color:"white"});
            setBtnText("Click to Black");
            setHeadStyle({color:"black"});
        }

    }
  return (
    <div className="container" style={bgcolor}>
        <h1 className='textdes3' style={headStyle}>UseState Example</h1>
        <div className='design'>
        <button className='btn' onClick={()=> colorChange()} style={btnStyle}>{btnText}</button>
        </div>
    </div>
  )
}

export default ToggleButton