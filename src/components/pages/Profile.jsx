import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    const { state } = useContext(UserContext);
    const [myPostImage, setMyPostImage] = useState([]);

    useEffect(() => {
        fetch('/my-post', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setMyPostImage(data.myposts);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <React.Fragment>
            {
                state ? 
                <div className="main-profile">
                    <div className="profile">
                        <div>
                            <img className="profile-picture" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
                        </div>
                        <div>
                            <h4>{ state.name }</h4>
                            <h5>{ state.email }</h5>
                            <div className="profile-count">
                                <h6>{ myPostImage.length } posts</h6>
                                <h6>{ state.followers.length } followers</h6>
                                <h6>{ state.following.length } following</h6>
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        {
                            myPostImage.map(mypost => {
                                return (
                                    <img key={mypost._id} className="gallery-image" src={mypost.photo} alt={mypost.title}/>
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
 
export default Profile;