import React from 'react';
import './AddMessege.scss';

const AddMessege = (props) => {
  return (
    <div className="add-messege">
          <textarea onChange={props.onMessageChange} placeholder="Введите сообщение" value={props.newMessegeText}></textarea>
          <button onClick={props.addMessege}>Add messege</button>
        </div>
  )
}

export default AddMessege