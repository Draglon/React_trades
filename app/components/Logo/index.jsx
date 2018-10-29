import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

import img from '../../images/logo.jpg';

class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <NavLink className='logo__link' to='/'>
                    <img className='logo__img' src={img} alt='Trades' />
                    <span className='logo__name'>Trades</span>
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
)(Logo);