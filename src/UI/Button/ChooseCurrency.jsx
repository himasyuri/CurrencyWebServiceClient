import React from 'react'
import classes from "./ChooseCurrency.module.css"

const ChooseCurrency = ({children}, ...props) => {
  return (
    <button {...props} className={classes.ChooseBut}>
        {children}
    </button>
  )
}

export default ChooseCurrency