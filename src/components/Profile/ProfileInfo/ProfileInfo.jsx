import React from 'react'
import './ProfileInfo.scss'

const ProfileInfo = () => {
    return (
        <div className="profile-info-wrapper">
            <div className='photo'>
                <img src="https://kartinkin.net/uploads/posts/2021-04/thumbs/1617584988_23-p-fon-dlya-saita-temnii-23.jpg" alt="" />
            </div>
            <div className='profile-info'>
                <div className="image">
                    <img src="https://kartinkin.net/uploads/posts/2022-03/1646322729_4-kartinkin-net-p-derzkie-kartinki-na-avu-4.jpg" alt="" />
                </div>
                <div className="info">
                    <div className="item">Lucile Kärt</div>
                    <div className="item">01.01.1996</div>
                    <div className="item country">Great Britain</div>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo