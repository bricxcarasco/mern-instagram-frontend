import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const history = useHistory();

    const { state, dispatch } = useContext(UserContext);

    const logoutFunction = () => {
        localStorage.clear();
        dispatch({
            type: "CLEAR"
        });
        history.push('/signin');
    }

    const renderList = () => {
        if (state) {
            return [
                <li key="0"><Link to="/following">Posts</Link></li>,
                <li key="1" ><Link to="/profile">Profile</Link></li>,
                <li key="2"><Link to="/create">Create Post</Link></li>,
                <li key="3">
                    <button 
                    className="btn #c62828 red darken-3"
                    onClick={() => logoutFunction()}>Logout</button>
                </li>
            ];
        } else {
            return [
                <li key="4"><Link to="/signin">Signin</Link></li>,
                <li key="5"><Link to="/signup">Signup</Link></li>
            ];
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white">
            <Link to={state ? "/" : "/signin"} className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right">
                { renderList() }
            </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;