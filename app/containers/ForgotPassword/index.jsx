import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class ForgotPassword extends Component {
    render() {
        const { translateResetPassword } = this.props;
        const resetPassword = translateResetPassword;
        return (
            <section className='section forgot'>
                <div className='wrapper'>
                    <h2 className='forgot__title'>{resetPassword.title}</h2>
                    <form className='form'>
                        <div className='form__field form__field--error'>
                            <input type='email' placeholder='Email' />
                            <i className='icon-envelop'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__field'>
                            <input type='password' placeholder='Password' />
                            <i className='icon-key'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__field'>
                            <input type='password' placeholder='Confirm Password' />
                            <i className='icon-key'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__btns'>
                            <button className='btn btn-primary btn--middle btn-forgot'>{resetPassword.button}</button>
                        </div>
                        <div className='login__text'>{resetPassword.textNotRegistered} <NavLink className='login__link' to='/signup'>{resetPassword.linkCreateAccount}</NavLink></div>
                    </form>
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
)(ForgotPassword);