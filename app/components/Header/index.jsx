import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuToggle } from '../../store/selector.jsx';

import Logo from '../../components/Logo/index.jsx';
import Navbar from '../../components/Navbar/index.jsx';
import Lang from '../../components/Lang/index.jsx';
import Notification from '../../components/Notification/index.jsx';
import Auth from '../../components/Auth/index.jsx';
import Hamburger from '../../components/Hamburger/index.jsx';
import Profile from '../../components/Profile/index.jsx';
import ProfileBalance from '../../components/Profile/ProfileBalance.jsx';

let logged = false;

class Header extends Component {
    render() {
        const { translateHeader, menuVisible } = this.props;

        return (
            <header className='header'>
                <div className='wrapper'>
                    <Logo />
                    <div className={`header__nav${menuVisible ? ' active' : ''}`}>
                        <Navbar translateNavbar={translateHeader.navbar} />
                        <Notification />
                        <Lang />
                        {logged ? <Profile /> : <Auth />}
                    </div>
                    <div className='header__btns'>
                        <ProfileBalance /> 
                        <Hamburger />
                    </div>
                </div>
            </header>
        );
    }
}

export default connect(
    state => ({
        menuVisible: getMenuToggle(state),
    }),
    dispatch => ({
        
    })
)(Header);