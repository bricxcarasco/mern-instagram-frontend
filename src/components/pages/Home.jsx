import React, { useState, useEffect } from 'react';
import Post from '../templates/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            fetch('/allpost', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setPosts(data.posts);
            })
            .catch(error => console.log(error));
        }
    }, []);

    return (
        <div className="home">
            { posts ? posts.map((post, index) => <Post key={post._id} post={post} /> ) : '' }
        </div>
    );
}
 
export default Home;