var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section login'>
                    <div className='wrapper'>
                        <h2 className='login__title'>Login</h2>
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
                                <NavLink className='login__link' to='/forgot'>Forgot password?</NavLink>
                                <button className='btn btn-primary btn--middle btn-login'>Login</button>
                            </div>
                            <div className='login__text'>Not registered yet? <NavLink className='login__link' to='/signup'>Create accaunt</NavLink></div>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

module.exports = Login;