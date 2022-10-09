const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    title: "Title Page",
    users: [
        {
            id: 1,
            image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/121028082/original/f545872196abd49e4498b69a4a06ed60c39d8e78/create-minimalist-avatar-social-media-profile-picture.jpg",
            followed: true,
            fullName: "Ruby",
            status: "We grow fearless when we do the things we fear.",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            id: 2,
            image: "https://img.freepik.com/premium-vector/stylish-flat-black-white-human-avatar-social-media-presentation-people-avatar-icon-avatar-face-head-with-forearm-human-portrait-isolated-blue-background-vector-graphics_589396-126.jpg",
            followed: true,
            fullName: "Gary",
            status: "And, when you want something, all the universe conspires in helping you to achieve it.",
            location: {
                city: "Ukraine",
                country: "Kiev"
            }
        },
        {
            id: 3,
            image: "https://bestfreelancemarket.com/wp-content/uploads/2020/11/create-minimalist-avatar-social-media-profile-picture.png",
            fullName: "Travis",
            followed: false,
            status: "We grow fearless when we do the things we fear.",
            location: {
                city: "Ukraine",
                country: "Kiev"
            }
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {
                            ...e,
                            followed: true
                        }
                    }
                    return e;
                })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {
                            ...e,
                            followed: false
                        }
                    }
                    return e;
                })
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});

export default usersReducer;