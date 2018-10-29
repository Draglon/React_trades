import React, { Component } from 'react';
import { connect } from 'react-redux';

class TermsConditions extends Component {
    render() {
        return (
            <section className='section terms-conditions'>
                <div className='wrapper'>
                    <h2 className='terms-conditions__title'>Terms and Conditions</h2>
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
)(TermsConditions);