import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.MyModal]

    if(visible) {
        rootClasses.push(classes.active);
    }
  return (
    <div className={rootClasses.join(" ")} onClick={()=>setVisible()}>
        <div className={classes.MyModalContent}>
            {children}
        </div>
    </div>
  )
}

export default MyModal