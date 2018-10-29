import React, { Component } from 'react';
import { connect } from 'react-redux';

class SettingsSecurity extends Component {
    render() {
        return (
            <section className='section security'>
                <div className='wrapper'>
                    <nav className='security__nav'>
                        <label className='security__label'>Двухфакторная аутентификация</label>
                        <ul className='security__list'>
                            <li className='security__item active'>Google Authentificator</li>
                            <li className='security__item'>SMS</li>
                        </ul>
                    </nav>
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
)(SettingsSecurity);