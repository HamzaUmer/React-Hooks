import React, { useContext } from 'react'
import { FirstName } from '../App'

const CompC = () => {
    const fname = useContext(FirstName);
  return (
    <>
    <h1 style={{color: 'blue'}} className='head'>My Name is {fname} from C</h1>
    </>
  )
}

export default CompC