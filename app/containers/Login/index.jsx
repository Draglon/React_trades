import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, BrowserRouter }  from 'react-router-dom';

import Field from '../../components/Forms/Field.jsx';

class Login extends Component {

    // onChange(e) {
    //     var val = e.target.value;
    //     this.setState({name: val});
    // }

    handleSubmit(e) {
        e.preventDefault();
        alert('Login');
    }

    render() {
        const { translateLogin, handleSubmit } = this.props;
        const login = translateLogin;
        return (
            <section className='section login'>
                <div className='wrapper'>
                    <h2 className='login__title'>{login.title}</h2>
                    <form className='form' onSubmit={(e) => this.handleSubmit(e)}>
                        <Field type='email' placeholder='Email' classIcon='icon-envelop' required='true' />
                        <Field type='password' placeholder='Password' classIcon='icon-key' required='true' />

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