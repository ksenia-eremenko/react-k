import React from 'react'
import './Post.scss'

const Post = (item) => {
    return (
        <div className='item'>
            <div className="left">
                <div className="avatar">
                    <img src={item.image} alt="" />
                </div>
                <div className="text">{item.message}</div>
            </div>
            <div className="likes">
                <div className="image">
                    <img src="https://noblefox.ru/wp-content/uploads/2019/06/like-2019.png" alt="" />
                </div>
                {item.likeCount}
            </div>
        </div>
    )
}

export default Post;