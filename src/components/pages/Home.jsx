import React, { useState, useEffect } from 'react';
import Post from '../templates/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const likePost = (postId) => {
        fetch('/like', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                postId
            })
        })
        .then(response => response.json())
        .then(result => {
            const newPosts = posts.map(post => {
                if (post._id === result._id) {
                    return result;
                } else {
                    return post;
                }
            });
            setPosts(newPosts);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const unlikePost = (postId) => {
        fetch('/unlike', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                postId
            })
        })
        .then(response => response.json())
        .then(result => {
            const newPosts = posts.map(post => {
                if (post._id === result._id) {
                    return result;
                } else {
                    return post;
                }
            });
            setPosts(newPosts);
        })
        .catch(error => {
            console.log(error);
        });
    }

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
            { posts ? posts.map((post, index) => <Post key={post._id} post={post} like={likePost} unlike={unlikePost} /> ) : '' }
        </div>
    );
}
 
export default Home;