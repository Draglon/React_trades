import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notifications extends Component {
    render() {
        return (
            <section className='section notifications'>
                <div className='wrapper'>
                    <h2 className='settings__title'>Notifications</h2>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Notifications);