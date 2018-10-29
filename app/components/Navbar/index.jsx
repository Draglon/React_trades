import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar__menu'>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/news'>Новости</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/trade'>Торги</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/exchange'>Обмен</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/wallet'>Кошелек</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Navbar);