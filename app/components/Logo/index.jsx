import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

let logged = false;

class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                {logged ?
                    <NavLink className='logo__link' to='/trade'>
                        <span className='logo__name'>Trades</span>
                    </NavLink>
                :
                    <NavLink className='logo__link' to='/'>
                        <span className='logo__name'>Trades</span>
                    </NavLink>
                }
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