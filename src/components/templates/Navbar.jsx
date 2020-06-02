import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);

    const renderList = () => {
        if (state) {
            return [
                <li key="1" ><Link to="/profile">Profile</Link></li>,
                <li key="2"><Link to="/create">Create Post</Link></li>
            ];
        } else {
            return [
                <li key="3"><Link to="/signin">Signin</Link></li>,
                <li key="4"><Link to="/signup">Signup</Link></li>
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