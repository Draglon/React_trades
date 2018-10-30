import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <section className='section invitation'>
                <div className='wrapper'>
                    <h1 className='invitation__title'>Cryptocurrency Trading Platform</h1>
                    <h2 className='invitation__subtitle'>OPEN ACCOUNT FOR FREE AND START TRADING NOW!</h2>
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