import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileBalance from './ProfileBalance.jsx';
import ProfileNav from './ProfileNav.jsx';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                <ProfileBalance />
                <ProfileNav />
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Profile);