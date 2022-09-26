import React from 'react'
import { NavLink } from 'react-router-dom'
import './DialogItem.scss'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
  
    return (
      <div className="item">
        <NavLink to={path}>{props.name}</NavLink> 
      </div>
    )
  }
  
export default DialogItem