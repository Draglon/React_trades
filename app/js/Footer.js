var React = require('react');

class Footer extends React.Component {      
    render() {
        return (
            <footer className='footer'>
                <div className='wrapper'>
                    <nav className='footer__nav'>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Продукты</h3>
                            <ul className='footer__list'>
                                <li><a href='#'>Кошелек</a></li>
                                <li><a href='#'>Торги</a></li>
                                <li><a href='#'>Обмен</a></li>
                                <li><a href='#'>API</a></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Информация</h3>
                            <ul className='footer__list'>
                                <li><a href='#'>Комисии и лимиты</a></li>
                                <li><a href='#'>Реферальная программа</a></li>
                                <li><a href='#'>Служба поддержки</a></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Компания</h3>
                            <ul className='footer__list'>
                                <li><a href='#'>О нас</a></li>
                                <li><a href='#'>Контакты</a></li>
                                <li><a href='#'>Новости</a></li>
                            </ul>
                        </div>
                        <div className='footer__item'>
                            <h3 className='footer__title'>Документы</h3>
                            <ul className='footer__list'>
                                <li><a href='#'>Договор оферты</a></li>
                                <li><a href='#'>Политика конфиденциальности</a></li>
                                <li><a href='#'>AML</a></li>
                                <li><a href='#'>Пользовательское соглашение</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className='footer__copy'>2018 &copy; Trades.pp.ua</div>
                </div>
            </footer>
        );
    }
}
 
module.exports = Footer;