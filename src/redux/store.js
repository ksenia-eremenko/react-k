import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [{
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
        },
        dialogsPage: {
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
        },
        sidebar: {
            navigation: [{
                    url: '/profile',
                    title: 'Profile'
                },
                {
                    url: '/dialogs',
                    title: 'Messages'
                },
                {
                    url: '/news',
                    title: 'News'
                },
                {
                    url: '/music',
                    title: 'Music'
                },
                {
                    url: '/settings',
                    title: 'Settings'
                }
            ],
            friends: [{
                    name: 'Ruby',
                    image: 'https://media2.telemetr.me/file/media-tm/avatars/d4bcb11405d4485819b98577516863c6.jpg'
                },
                {
                    name: 'Gary',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qKEYda0WiHM4FShJuFdoy2q8G7gkrRpykA&usqp=CAU'
                },
                {
                    name: 'Travis',
                    image: 'https://photoshablon.com/_ph/43/2/139185346.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;