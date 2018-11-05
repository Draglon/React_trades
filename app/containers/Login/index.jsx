import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Login extends Component {
    render() {
        const { translateLogin } = this.props;
        const login = translateLogin;
        return (
            <section className='section login'>
                <div className='wrapper'>
                    <h2 className='login__title'>{login.title}</h2>
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
                        <div className='form__btns flex-space-between'>
                            <NavLink className='login__link' to='/forgot'>{login.linkForgot}</NavLink>
                            <button className='btn btn-primary btn--middle btn-login'>{login.button}</button>
                        </div>
                        <div className='login__text'>{login.textNotRegistered} <NavLink className='login__link' to='/signup'>{login.linkCreateAccount}</NavLink></div>
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
)(Login);