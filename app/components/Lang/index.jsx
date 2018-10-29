import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Lang extends Component {
    render() {
        return (
            <div className='lang'>
                <div className='lang__link'>English</div>

                <ul className='lang__list'>
                    <li className='lang__item'><NavLink>English</NavLink></li>
                    <li className='lang__item'><NavLink>Русский</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Lang);

