import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Navbar extends Component {
    render() {
        const { translateNavbar } = this.props;

        return (
            <nav className='navbar'>
                <ul className='navbar__menu'>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/news'>{translateNavbar[0]}</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/trade'>{translateNavbar[1]}</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/exchange'>{translateNavbar[2]}</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' to='/wallet'>{translateNavbar[3]}</NavLink></li>
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