import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <section className='section invitation'>
                <div className='wrapper'>
                    <h1 className='invitation__title'>Cryptocurrency Trading Platform</h1>
                    <h3 className='invitation__subtitle'>OPEN ACCOUNT FOR FREE AND START TRADING NOW!</h3>
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