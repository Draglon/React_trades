import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';
// import Login from '../Login';

class Signup extends Component {
    render() {
        const { translateSignup } = this.props;
        const signup = translateSignup;
        return (
            <section className='section signup'>
                <div className='wrapper'>
                    <h2 className='signup__title'>{signup.title}</h2>
                    <form className='form'>
                        <div className='form__field form__field--error'>
                            <input type='email' placeholder='Email' />
                            <i className='icon-envelop'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__field'>
                            <input type='text' placeholder='Name' />
                            <i className='icon-user'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__field'>
                            <input type='password' placeholder='Password' />
                            <i className='icon-key'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__field'>
                            <input type='password' placeholder='Password' />
                            <i className='icon-key'></i>
                            <span className='form__field-error'>Error</span>
                        </div>
                        <div className='form__field'>
                            <input type='checkbox' id='agree' />
                            <label htmlFor='agree'>{signup.labelAccept} <NavLink to='/terms'>{signup.linkTermsConditions}</NavLink></label>
                        </div>
                        <div className='form__btns'>
                            <button className='btn btn-primary btn--middle btn-signup'>{signup.button}</button>
                        </div>
                        <div className='form__field'>
                            <div className='login__text'>{signup.textAlreadyRegistered} <NavLink className='login__link' to='/login'>{signup.linkLogin}</NavLink></div>
                        </div>
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
)(Signup);