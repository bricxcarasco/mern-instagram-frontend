import React from 'react';

const Post = (props) => {
    const { title, body, photo, postedBy } = props.post;
    return (
        <div className="card home-card">
            <h5>{postedBy.name}</h5>
            <div className="card-image">
                <img src={`${photo}`} alt=""/>
            </div>
            <div className="card-content">
                <i className="material-icons home-favorite">favorite</i>
                <h6>{title}</h6>
                <p>{body}</p>
                <input type="text" placeholder="Add a comment..."/>
            </div>
        </div>
    );
}
 
export default Post;