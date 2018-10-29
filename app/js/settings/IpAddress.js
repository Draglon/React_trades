var React = require('react');

class SettingsIpAddress extends React.Component {
    render() {
        return (
            <section className='section ip-address'>
                <div className='wrapper'>
                    <form className='form'>
                        <div className='form__field'>
                            <input type='checkbox' id='accsess_1' />
                            <label className='time-input' htmlFor='accsess_1'>Включить авторизацию только для доверенных IP-адресов</label>
                        </div>
                        <div className='form__field form__field--border'>
                            <input type='checkbox' id='accsess_2' />
                            <label className='' htmlFor='accsess_2'>Доступ к API только с доверенных IP-адресов</label>
                        </div>

                        <div className='form__field form__field--border'>
                            <h4>Добавить новый адресс</h4>
                            <label className='form__label'>IP-адресс или CIDR</label>
                            <div className='form__field-input flex-space-between'>
                                <div style={{width: '70%'}}><input type='text' value='159.224.194.43' /></div>
                                <div style={{width: '30%'}}><button className='btn btn-primary btn--middle'>Добавить</button></div>
                            </div>
                            <div className='form__example'>159.224.194.43</div>
                        </div>
                        <div className='form__field'>
                            <h4>Список доверенных IP адресов/CIDR</h4>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
 
module.exports = SettingsIpAddress;