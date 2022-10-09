import React from 'react'
import "./Users.scss"

const Users = (props) => {
    if (!props.usersPage.users.length) {
        props.setUsers = ([
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
        ])
    }
    return (
        <div className="users">
            <div className="title">{props.usersPage.title}</div>
            <div className="items">
                {props.usersPage.users.map(e => <div className="item" key={e.id}>
                    <div className="left">
                        <div className="image">
                            <img src={e.image} alt="" />
                        </div>
                        <div className="followed">
                            {(e.followed)
                                ? <button onClick={() => { props.unfollow(e.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(e.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className="right">
                        <div className="info-user">
                            <div className="name">{e.fullName}</div>
                            <div className="status">{e.status}</div>
                        </div>
                        <div className="location">
                            <span>{e.location.country}</span>
                            <span>{e.location.city}</span>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Users;