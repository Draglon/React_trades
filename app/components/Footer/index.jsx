import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Footer extends Component {      
    render() {
        const { translateFooter } = this.props;
        const navbar = translateFooter.navbar;
        return (
            <footer className='footer'>
                <div className='wrapper'>
                    <nav className='footer__nav'>
                        <div className='footer__item'>
                            <h3 className='footer__title'>{navbar[0].title}</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/wallet'>{navbar[0].menu[0]}</NavLink></li>
                                <li><NavLink to='/trade'>{navbar[0].menu[1]}</NavLink></li>
                                <li><NavLink to='/exchange'>{navbar[0].menu[2]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[0].menu[3]}</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>{navbar[1].title}</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/'>{navbar[1].menu[0]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[1].menu[1]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[1].menu[2]}</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>{navbar[2].title}</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/'>{navbar[2].menu[0]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[2].menu[1]}</NavLink></li>
                                <li><NavLink to='/news'>{navbar[2].menu[2]}</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>{navbar[3].title}</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/'>{navbar[3].menu[0]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[3].menu[1]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[3].menu[2]}</NavLink></li>
                                <li><NavLink to='/'>{navbar[3].menu[3]}</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <div className='footer__copy'>2018 &copy; Trades.pp.ua</div>
                </div>
            </footer>
        );
    }
}
 
export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Footer);