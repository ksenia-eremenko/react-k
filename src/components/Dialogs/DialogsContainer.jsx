import { connect } from 'react-redux';
import { addNewMessageCreator, updateNewMessagesCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: () => {
            dispatch(addNewMessageCreator());
        },
        sendMessage: (text) => {
            dispatch(updateNewMessagesCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;