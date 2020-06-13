import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [ userPost, setUserPost ] = useState([]);
    const [ user, setUser ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/user/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(response => response.json())
        .then(profile => {
            setUser(profile.user);
            setUserPost(profile.posts);
        })
        .catch(error => {
            console.log(error);
        });
    },[id]);

    return (
        <React.Fragment>
            {
                Object.entries(user).length !== 0 ? 
                <div className="main-profile">
                    <div className="profile">
                        <div>
                            <img className="profile-picture" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
                        </div>
                        <div>
                            <h4>{ user.name }</h4>
                            <h5>{ user.email }</h5>
                            <div className="profile-count">
                                <h6>{ userPost.length } posts</h6>
                                <h6>40 followers</h6>
                                <h6>40 following</h6>
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        {
                            userPost.map(post => {
                                return (
                                    <img key={post._id} className="gallery-image" src={post.photo} alt={post.title}/>
                                );
                            })
                        }
                    </div>
                </div>
                : <h2 className="user-profile-loading center-align">loading...</h2>
            }
        </React.Fragment>
    );
}
 
export default UserProfile;