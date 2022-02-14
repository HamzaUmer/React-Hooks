import React, { useContext } from 'react'
import CompB from './CompB'
import { FirstName } from '../App'
import "./context.css"
//Context API simple Example
const CompA = () => {
    const fname = useContext(FirstName)
  return (
    <>
    <div className="container">
    <h1 className='textdes2'>Context API example</h1>
        <div className="design2">
    <h1 style={{color: 'red'}} className='head'>My Name is {fname} from A</h1>
    <CompB/>
    </div>
    </div>
    </>
  )
}

export default CompA