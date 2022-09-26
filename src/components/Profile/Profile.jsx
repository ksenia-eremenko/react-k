import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './Profile.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile