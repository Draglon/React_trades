var React = require('react');
import {NavLink, BrowserRouter}  from 'react-router-dom';

import img from '../images/logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='wrapper'>
                    <div className='header__left-side'>
                        <div className='logo'>
                            <NavLink className='logo__link' to='/'>
                                <img className='logo__img' src={img} alt='Trades' />
                                <span className='logo__name'>Trades</span>
                            </NavLink>
                        </div>
                        <nav className='navbar'>
                            <ul className='navbar__menu'>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/news'>Новости</NavLink></li>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/trade'>Торги</NavLink></li>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/exchange'>Обмен</NavLink></li>
                                <li className='navbar__item'><NavLink className='navbar__link' to='/wallet'>Кошелек</NavLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='header__right-side'>
                        <nav className='header__nav'>
                            {/* <div className='lang'>
                                <a className='lang__link' href='#' title='Language'>Русский</a>
                                
                                    <ul className='lang'>
                                        <li className='lang__item'>
                                            
                                        </li>
                                        <li className='lang__item'>
                                            
                                        </li>
                                        <li className='lang__item'>
                                            
                                        </li>
                                    </ul>
                               
                            </div> */}

                            <div className='notification'>
                                <NavLink className='notification__link' to='/notifications' title='Notification'>
                                    <i className='icon-bell'></i>
                                    <span className='notification__count'>2</span>
                                </NavLink>
                            </div>

                            <div className='profile'>
                                <div className='profile__balance'>
                                    <div className='profile__balance-btn'><i className='icon-credit-card'></i>0.11215466 BTC</div>
                                    <div className='profile__wallet'>
                                        <ul className='profile__wallet-list'>
                                            <li className='profile__wallet-item'>
                                                <div>&nbsp;</div>
                                                <div>Баланс</div>
                                                <div>В ордерах</div>
                                            </li>
                                            <li className='profile__wallet-item'>
                                                <div>BTC</div>
                                                <div>0</div>
                                                <div>0</div>
                                            </li>
                                            <li className='profile__wallet-item'>
                                                <div>DOGE</div>
                                                <div>3206.75</div>
                                                <div>0</div>
                                            </li>
                                            <li className='profile__wallet-item'>
                                                <div>DASH</div>
                                                <div>0</div>
                                                <div>0</div>
                                            </li>
                                            <li className='profile__wallet-item'>
                                                <div>ETH</div>
                                                <div>0.20636616</div>
                                                <div>0</div>
                                            </li>
                                            <li className='profile__wallet-item'>
                                                <div>XRP</div>
                                                <div>1000</div>
                                                <div>0</div>
                                            </li>
                                        </ul>
                                        <NavLink className='profile__wallet-link' to='/wallet'>Перейти в кошелек<i className='icon-circle-right'></i></NavLink>
                                    </div>
                                </div>
                                
                                <nav className='profile__nav'>
                                    <div className='profile__name'>test321</div>
                                    <ul className='profile__list'>
                                        <li className='profile__item'><NavLink className='profile__link' to='/'>Верификация аккаунта</NavLink></li>
                                        <li className='profile__item'><NavLink className='profile__link' to='/'>Личные сообщения</NavLink></li>
                                        <li className='profile__item'><NavLink className='profile__link' to='/'>Реферальная программа</NavLink></li>
                                        <li className='profile__item'><NavLink className='profile__link' to='/'>История торгов</NavLink></li>
                                        <li className='profile__item'><NavLink className='profile__link' to='/news'>Новости</NavLink></li>
                                        <li className='profile__item'><NavLink className='profile__link' to='/settings'>Настройки</NavLink></li>
                                        <li className='profile__item'><NavLink className='profile__link' to='/'>Выйти</NavLink></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className='auth'>
                                <NavLink className='auth__link' to='/login'>Login</NavLink>
                                <NavLink className='auth__link' to='/signup'>Signup</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
 
module.exports = Header;
