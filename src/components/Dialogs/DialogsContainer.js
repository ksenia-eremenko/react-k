import { connect } from 'react-redux';
import { addNewMessageCreator, updateNewMessagesCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogs,
        newMessegeText: state.dialogs.newMessegeText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessagesCreator(text));
        },
        sendMessage: () => {
            dispatch(addNewMessageCreator());
            dispatch(updateNewMessagesCreator(''));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;