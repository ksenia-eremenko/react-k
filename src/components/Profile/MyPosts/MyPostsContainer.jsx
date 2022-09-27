import { addPostCreator, updateNewPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import './MyPosts.scss'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profile,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostCreator: (text) => {
            dispatch(updateNewPostCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
            dispatch(updateNewPostCreator(''));
        },
        removePost: () => {
            dispatch(updateNewPostCreator(''));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;