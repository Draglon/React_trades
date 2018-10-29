import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Notification extends Component {
    render() {
        return (
            <div className='notification'>
                <NavLink className='notification__link' to='/notifications' title='Notification'>
                    <i className='icon-bell'></i>
                    <span className='notification__count'>2</span>
                </NavLink>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Notification);