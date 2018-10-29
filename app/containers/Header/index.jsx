import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/index.jsx';
import Navbar from '../../components/Navbar/index.jsx';
import Lang from '../../components/Notification/index.jsx';
import Notification from '../../components/Notification/index.jsx';
import Profile from '../../components/Profile/index.jsx';
import Auth from '../../components/Auth/index.jsx';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='wrapper'>
                    <div className='header__left-side'>
                        <Logo />
                        <Navbar />
                    </div>

                    <div className='header__right-side'>
                        <nav className='header__nav'>
                            {/* <Lang /> */}
                            <Notification />
                            <Profile />
                            <Auth />
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Header);