import { connect } from 'react-redux'
import { followAC, setUsersAC, unFollowAC } from '../../redux/users-reducer';
import Users from './Users'
let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
} 
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;