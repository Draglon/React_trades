import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Footer extends Component {      
    render() {
        return (
            <footer className='footer'>
                <div className='wrapper'>
                    <nav className='footer__nav'>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Продукты</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/wallet'>Кошелек</NavLink></li>
                                <li><NavLink to='/trade'>Торги</NavLink></li>
                                <li><NavLink to='/exchange'>Обмен</NavLink></li>
                                <li><NavLink to='/'>API</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Информация</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/'>Комисии и лимиты</NavLink></li>
                                <li><NavLink to='/'>Реферальная программа</NavLink></li>
                                <li><NavLink to='/'>Служба поддержки</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Компания</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/'>О нас</NavLink></li>
                                <li><NavLink to='/'>Контакты</NavLink></li>
                                <li><NavLink to='/news'>Новости</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Документы</h3>
                            <ul className='footer__list'>
                                <li><NavLink to='/'>Договор оферты</NavLink></li>
                                <li><NavLink to='/'>Политика конфиденциальности</NavLink></li>
                                <li><NavLink to='/'>AML</NavLink></li>
                                <li><NavLink to='/'>Пользовательское соглашение</NavLink></li>
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