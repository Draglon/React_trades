import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Auth extends Component {
    render() {
        return (
            <div className='auth'>
                <NavLink className='auth__link' to='/login'>Login</NavLink>
                <NavLink className='auth__link' to='/signup'>Signup</NavLink>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Auth);