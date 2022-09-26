import React from 'react'
import AddMessege from './AddMessege/AddMessege';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss'
import Message from './Message/Message';

const Dialogs = (props) => {
  let addMessege = () => {
    props.sendMessage();
  }
  
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className='dialogs'>
      <div className="dialogs-items">
        {props.dialogsPage.dialogsData.map((e, i) => <DialogItem name={e.name} id={e.id} key={i} />)}
      </div>
      <div className="messeges">
        <div className="items">
          {props.dialogsPage.messegesData.map((e, i) => <Message message={e.messege} key={i} />)}
        </div>
        <AddMessege
          newMessegeText={props.dialogsPage.newMessegeText}
          onMessageChange={onMessageChange}
          addMessege={addMessege}
        />
      </div>
    </div>
  )
}

export default Dialogs