import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

import Field from '../../components/Forms/Field.jsx';

class ForgotPassword extends Component {

    handleSubmit(e) {
        e.preventDefault();
        alert('Forgot Password');
    }

    render() {
        const { translateResetPassword } = this.props;
        const resetPassword = translateResetPassword;
        return (
            <section className='section forgot'>
                <div className='wrapper'>
                    <h2 className='forgot__title'>{resetPassword.title}</h2>
                    <form className='form' onSubmit={(e) => this.handleSubmit(e)}>
                        <Field type='email' placeholder='Email' classIcon='icon-envelop' required='true' />
                        <Field type='password' placeholder='Password' classIcon='icon-key' required='true' />
                        <Field type='password' placeholder='Confirm Password' classIcon='icon-key' required='true' />

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