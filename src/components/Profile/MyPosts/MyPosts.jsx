import React from 'react'
import './MyPosts.scss'
import Post from './Post/Post';

const MyPosts = (props) => {
    let onAddPost = () => {
        props.addPost();
    }
    let onRemovePost = () => {
        props.removePost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostCreator(text);
    }

    return (
        <div className='posts'>
            <div className='new-post'>
                <textarea onChange={onPostChange} placeholder='Введите текст' value={props.profilePage.newPostText} />
                <div className="btns">
                    <button onClick={onAddPost}>Add Post</button>
                    <button onClick={onRemovePost}>Remove</button>
                </div>
            </div>
            <div className="items">
                {props.profilePage.postsData.map((e, i) => <Post
                    message={e.message}
                    likeCount={e.likeCount}
                    image={e.image} key={i}
                />)}
            </div>
        </div>
    )
}

export default MyPosts;