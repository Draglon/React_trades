var React = require('react');

class SettingsNotifications extends React.Component {
    render() {
        return (
            <section className='section notification'>
                <div className='wrapper'>
                    <form className='form'>
                        <div className='form__field notification__time-field'>
                            <input type='checkbox' id='getNotifications' />
                            <label className='time-input' htmlFor='getNotifications'>Получать оповещения о сделках и проверять их каждые <input type='text' value='5' style={{width: '35px', height: '30px'}} /> минут.</label>
                        </div>
                        <div className='form__field'>
                            <input type='checkbox' id='getNews' />
                            <label className='' htmlFor='getNews'>Я хочу получать новости и рассылки на электронный ящик</label>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
 
module.exports = SettingsNotifications;