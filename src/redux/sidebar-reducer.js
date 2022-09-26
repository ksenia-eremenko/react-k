let initialStore = {
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

const sidebarReducer = (state = initialStore, action) => {
    return state;
}
export default sidebarReducer;