import React from 'react';
import './Friend.scss'

const Friend = ({item}) => {
    return (
        <div className="item">
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <div className="name">{item.name}</div>
        </div>
    )
}

export default Friend