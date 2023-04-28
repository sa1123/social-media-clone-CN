import React, {Component} from 'react';
import { connect } from 'react-redux';
import {startSignup, signup, clearAuthState} from '../actions/auth'
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
        this.state = {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
        }
    }

    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const {email, password, confirmPassword, name} = this.state;

        if (email && password && confirmPassword && name) {
            this.props.dispatch(startSignup());
            this.props.dispatch(signup(email, password, confirmPassword, name));
        }
    }

    handleInputChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }

    render(){
        const {error, inProgress, isLoggedin} = this.props.auth;

        if(isLoggedin) {
            return <Redirect to="/"/>;
        }
        return (
            <form className='login-form'>
                <span className='login-signup-header'>Signup</span>
                {error && <div className='alert error-dialogue'>{error}</div>}
                <div className='field'>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        required 
                        onChange={(e) => this.handleInputChange('name', e.target.value)} 
                    />
                </div>
                <div className='field'>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        required 
                        onChange={(e) => this.handleInputChange('email', e.target.value)} 
                    />
                </div>
                <div className='field'>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        required 
                        onChange={(e) => this.handleInputChange('password', e.target.value)} 
                    />
                </div>
                <div className='field'>
                    <input 
                        type='password' 
                        placeholder='Confirm password' 
                        required 
                        onChange={(e) => this.handleInputChange('confirmPassword', e.target.value)} 
                    />
                </div>
                <div className='field'>
                    <button onClick={this.onFormSubmit} disabled={inProgress}>
                        Signup
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({auth}) => ({
    auth
});
 
export default connect(mapStateToProps)(Signup);