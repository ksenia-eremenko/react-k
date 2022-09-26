const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [{
            id: 1,
            name: 'Ruby Johnson'
        },
        {
            id: 2,
            name: 'Christopher Curtis'
        },
        {
            id: 3,
            name: 'Gary Carter'
        },
        {
            id: 4,
            name: 'Rachel Austin'
        },
        {
            id: 5,
            name: 'Lisa Bennett'
        },
        {
            id: 6,
            name: 'Wilma Robinson'
        },
        {
            id: 7,
            name: 'Edward Reynolds'
        },
        {
            id: 8,
            name: 'Travis Young'
        }
    ],
    messegesData: [{
            id: 1,
            messege: 'Hello, how are you?'
        },
        {
            id: 3,
            messege: 'Fine, thanks. And you?'
        },
        {
            id: 4,
            messege: 'Great! My name is Lima.'
        },
        {
            id: 5,
            messege: `I am Emily. It's nice to meet you.`
        }
    ],
    newMessegeText: ""
}
 
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessegeText = {
                id: 6,
                messege: state.newMessegeText
            };
            state.messegesData.push(newMessegeText);
            state.newMessegeText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessegeText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addNewMessageCreator = () => ({
    type: ADD_NEW_MESSAGE
});

export const updateNewMessagesCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
})

export default dialogsReducer;