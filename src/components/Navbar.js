import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import { logoutUser } from "../actions/auth";

class Navbar extends React.Component{
    logOut = () => {
        localStorage.removeItem('token');
        this.props.dispatch(logoutUser())
    }

    render() {
        const {auth} = this.props;
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
                    <input placeholder="Search" />

                    <div className="search-results">
                        <ul>
                            <li className="search-results-row">
                                <img
                                    src="https://www.svgrepo.com/show/502852/smile.svg"
                                    alt="user-dp"
                                />
                                <span>John Doe</span>
                            </li>
                            <li className="search-results-row">
                                <img
                                    src="https://www.svgrepo.com/show/502852/smile.svg"
                                    alt="user-dp"
                                />
                                <span>John Doe</span>
                            </li>
                        </ul>
                    </div>
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

function mapStateToProps(state){
    return (
        // auth: state.auth
        state
    );
}

export default connect(mapStateToProps)(Navbar);