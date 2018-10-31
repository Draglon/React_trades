import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuToggle } from '../../store/selector.jsx';

import Logo from '../../components/Logo/index.jsx';
import Navbar from '../../components/Navbar/index.jsx';
import Lang from '../../components/Lang/index.jsx';
import Notification from '../../components/Notification/index.jsx';
import Profile from '../../components/Profile/index.jsx';
import Auth from '../../components/Auth/index.jsx';
import Hamburger from '../../components/Hamburger/index.jsx';

let logged = false;

class Header extends Component {
    render() {
        const { menuVisible } = this.props;

        return (
            <header className='header'>
                <div className='wrapper'>
                    <Logo />
                    <div className={`header__nav${menuVisible ? ' active' : ''}`}>
                        <Navbar />
                        <Notification />
                        <Lang />
                        {logged ? <Profile /> : <Auth />}
                    </div>
                    {/* {logged ?  <Profile /> : null} */}
                    <Hamburger />
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