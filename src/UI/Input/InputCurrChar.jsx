import React from 'react'
import classes from './InputCurrChar.module.css'

const InputCurrChar = (props) => {
  return (
      <input className={classes.InputCurr} {...props}/>
  )
}

export default InputCurrChar