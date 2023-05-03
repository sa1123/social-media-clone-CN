import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import { logoutUser } from "../actions/auth";
import { searchUsers } from "../actions/search";

class Navbar extends React.Component{
    logOut = () => {
        localStorage.removeItem('token');
        this.props.dispatch(logoutUser())
    }

    handleSearch = (e) => {
        const searchText = e.target.value;

        this.props.dispatch(searchUsers(searchText));
    }

    render() {
        const {auth, results} = this.props;
        return (
            <nav className="nav">
                <div className="left-div">
                    <Link to="/">
                        <img
                            src="https://www.svgrepo.com/show/503858/card-holder.svg"
                            alt="logo"
                            style={{maxWidth: '10%'}}
                        />
                    </Link>
                </div>
                <div className="search-container">
                    <img
                        className="search-icon"
                        src="https://www.svgrepo.com/show/502828/search.svg"
                        alt="search-icon"
                    />
                    <input placeholder="Search" onChange={this.handleSearch}/>

                    {results.length > 0 && (
                        <div className="search-results">
                            <ul>
                                {results.map((user) => (
                                    <li className="search-results-row" key={user._id}>
                                        <Link to={`/user/${user._id}`}>
                                            <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp"/>
                                            <span>{user.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="right-nav">
                    {auth.isLoggedin && (
                        <div className="user">
                            <Link to="/settings">
                                <img
                                    src="https://www.svgrepo.com/show/502852/smile.svg"
                                    alt="user-dp"
                                    id="user-dp"
                                />
                            </Link>
                            <span>{auth.span.name}</span>
                        </div>
                    )}
                    <div className="nav-links">
                        <ul>
                            {!auth.isLoggedin &&(
                                <li>
                                    <Link to="/login">Log in</Link>
                                </li>
                            )}

                            {auth.isLoggedin && (
                                <li onClick={this.logOut}>
                                    <Link to="/logout">Log out</Link>
                                </li>
                            )}
                            
                            {!auth.isLoggedin && (
                                <li>
                                    <Link to="/signup">Register</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state, results){
    return (
        // auth: state.auth
        state,
        results
    );
}

export default connect(mapStateToProps)(Navbar);