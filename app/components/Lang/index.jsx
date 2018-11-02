import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual';

class Lang extends Component {
    render() {
        const { setLeng } = this.props;

        return (
            <div className='lang'>
                <div className='lang__btn'>en</div>

                <ul className='lang__list'>
                    <li className='lang__item' onClick={() => { setLeng('en') }}>English</li>
                    <li className='lang__item' onClick={() => { setLeng('ru') }}>Русский</li>
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        setLeng: (lang) => {
            dispatch(IntlActions.setLocale(lang));
        },
    })
)(withTranslate(Lang));

