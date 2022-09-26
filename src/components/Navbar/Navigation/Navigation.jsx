import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ({ item }) => {
    return (
        <div className='item'>
            <NavLink to={item.url}>{item.title}</NavLink>
        </div>
    )
}

export default Navigation