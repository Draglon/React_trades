import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hamburger extends Component {
    render() {
        return (
            <div className='hamburger'>
                <span className='hamburger__icon'></span>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Hamburger);
