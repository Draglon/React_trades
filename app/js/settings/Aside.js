var React = require('react');

class SettingsAside extends React.Component {
    render() {
        return (
            <aside className='aside-settings'>
                <h2 className='settings__title'>Оповещения</h2>
                <nav className='settings__nav'>
                    <ul className='settings__list'>
                        <li className='settings__item active'>
                            <a className='settings__link' href='#'>
                                <span className='settings__label'>Оповещения</span>
                                <span className='settings__text'>Уведомления и почтовые рассылки</span>
                            </a>
                        </li>
                        <li className='settings__item'>
                            <a className='settings__link' href='#'>
                                <span className='settings__label'>API Keys</span>
                                <span className='settings__text'>Настройки ключей</span>
                            </a>
                        </li>
                        <li className='settings__item'>
                            <a className='settings__link' href='#'>
                                <span className='settings__label'>Защита</span>
                                <span className='settings__text'>Google Authentificator, SMS</span>
                            </a>
                        </li>
                        <li className='settings__item'>
                            <a className='settings__link' href='#'>
                                <span className='settings__label'>Пароль</span>
                                <span className='settings__text'>Изменить пароль</span>
                            </a>
                        </li>
                        <li className='settings__item'>
                            <a className='settings__link' href='#'>
                                <span className='settings__label'>История доступа</span>
                                <span className='settings__text'>Сессии пользователя</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}
 
module.exports = SettingsAside;

