import React, { useContext } from 'react'
import CompC from './CompC'
import { FirstName } from '../App'
const CompB = () => {
    const fname = useContext(FirstName)
  return (
    <>
    <h1 style={{color: 'green'}} className='head'>My Name is {fname} from B</h1>
    <CompC/>
    </>
  )
}

export default CompB