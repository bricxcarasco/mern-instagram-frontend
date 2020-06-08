import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    const { state, dispatch } = useContext(UserContext);
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
        <div className="main-profile">
            <div className="profile">
                <div>
                    <img className="profile-picture" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
                </div>
                <div>
                    <h4>{state ? state.name : 'loading...'}</h4>
                    <div className="profile-count">
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
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
    );
}
 
export default Profile;