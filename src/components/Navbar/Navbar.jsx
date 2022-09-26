import React from 'react';
import Friend from './Friend/Friend'
import './Navbar.scss'
import Navigation from './Navigation/Navigation'

const Navbar = (props) => {
  return <div className="navbar">
          <nav className='navigation'>
            {props.sidebar.navigation.map((e, i) => <Navigation item={e} key={i} />)}
          </nav>
          <div className="friends">
            {props.sidebar.friends.map((e, i) => <Friend item={e} key={i} />)}
          </div>
        </div>
}

export default Navbar