import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

import Field from '../../components/Forms/Field.jsx';

class Signup extends Component {

    handleSubmit(e) {
        e.preventDefault();
        alert("Signup");
    }

    render() {
        const { translateSignup } = this.props;
        const signup = translateSignup;
        return (
            <section className='section signup'>
                <div className='wrapper'>
                    <h2 className='signup__title'>{signup.title}</h2>
                    <form className='form' onSubmit={(e) => this.handleSubmit(e)}>
                        <Field type='email' placeholder='Email' classIcon='icon-envelop' required='true' />
                        <Field type='text' placeholder='Name' classIcon='icon-user' required='true' />
                        <Field type='password' placeholder='Password' classIcon='icon-key' required='true' />
                        <Field type='password' placeholder='Confirm Password' classIcon='icon-key' required='true' />

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