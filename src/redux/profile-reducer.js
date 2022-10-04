const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {
            id: 2,
            message: `It's my first post`,
            likeCount: 12,
            image: 'https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg'
        },
        {
            id: 1,
            message: 'Hi, how are you?',
            likeCount: 2,
            image: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'
        },
        {
            id: 2,
            message: `It's my first post`,
            likeCount: 12,
            image: 'https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg'
        }
    ],
    newPostText: ""
}   

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
                image: 'https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg'
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPost
            }
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({
    type: ADD_NEW_POST
});

export const updateNewPostCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
});

export default profileReducer;