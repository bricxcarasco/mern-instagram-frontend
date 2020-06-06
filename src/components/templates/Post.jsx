import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Post = (props) => {
    const { state, dispatch } = useContext(UserContext);
    const { _id, title, likes, body, photo, postedBy } = props.post;

    const clickLike = () => {
        props.like(_id);
    }

    const clickUnlike = () => {
        props.unlike(_id);
    }

    return (
        <div className="card home-card">
            <h5>{postedBy.name}</h5>
            <div className="card-image">
                <img src={`${photo}`} alt=""/>
            </div>
            <div className="card-content">
                <div className="home-buttons">
                    <i className="material-icons home-favorite">favorite</i>
                    { 
                        likes.includes(state._id)
                        ? <i className="material-icons home-thumb" onClick={clickUnlike}>thumb_down</i>
                        : <i className="material-icons home-thumb" onClick={clickLike}>thumb_up</i>
                    }
                </div>
                <h6>{likes.length} { likes.length <= 1 ? 'like' : 'likes'}</h6>
                <h6>{title}</h6>
                <p>{body}</p>
                <input type="text" placeholder="Add a comment..."/>
            </div>
        </div>
    );
}
 
export default Post;