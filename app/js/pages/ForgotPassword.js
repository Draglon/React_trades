var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

class ForgotPassword extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section forgot'>
                    <div className='wrapper'>
                        <h2 className='forgot__title'>Reset Password</h2>
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
                                <button className='btn btn-primary btn--middle btn-forgot'>Confirm</button>
                            </div>
                            <div className='login__text'>Not registered yet? <NavLink className='login__link' to='/signup'>Create account</NavLink></div>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

module.exports = ForgotPassword;