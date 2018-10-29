import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <section className='section invitation'>
                <div className='wrapper'>
                    <h1 className='invitation__title'>Invitation</h1>
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
)(Home);