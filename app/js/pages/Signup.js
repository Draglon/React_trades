var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Signup extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section signup'>
                    <div className='wrapper'>
                        <h2 className='signup__title'>Signup</h2>
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
                                <label htmlFor='agree'>I accept <NavLink to='/terms'>Terms and Conditions</NavLink></label>
                            </div>
                            <div className='form__btns'>
                                <button className='btn btn-primary btn--middle btn-signup'>Sign Up</button>
                            </div>
                            <div className='form__field'>
                                <div className='login__text'>Already Registered? <NavLink className='login__link' to='/login'>Log in</NavLink></div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Signup;