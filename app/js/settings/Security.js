var React = require('react');

class SettingsSecurity extends React.Component {
    render() {
        return (
            <section className='section security'>
                <div className='wrapper'>
                    <nav className='security__nav'>
                        <label className='security__label'>Двухфакторная аутентификация</label>
                        <ul className='security__list'>
                            <li className='security__item active'>Google Authentificator</li>
                            <li className='security__item'>SMS</li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}
 
module.exports = SettingsSecurity;