import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lang extends Component {
    render() {
        return (
            <div className='lang'>
                <div className='lang__btn'>en</div>

                <ul className='lang__list'>
                    <li className='lang__item'>English</li>
                    <li className='lang__item'>Русский</li>
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Lang);

