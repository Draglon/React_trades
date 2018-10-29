var React = require('react');

class SettingsApiKey extends React.Component {
    render() {
        return (
            <section className='section api-key'>
                <div className='wrapper'>
                    <form className='form'>
                        <div className='form__field'>
                            <label className='form__label'>API key</label>
                            <div className='form__field-input'>
                                <input type='text' value='API key' />
                                <button className='btn-copy'><i className='icon-copy'></i></button>
                            </div>
                        </div>
                        <div className='form__field'>
                            <label className='form__label'>API secret</label>
                            <div className='form__field-input'>
                                <input type='text' value='API secret' />
                                <button className='btn-copy'><i className='icon-copy'></i></button>
                            </div>
                        </div>
                        <div className='form__btns'>
                            <button className='btn btn-primary btn--small'>Сгенирировать и сохранить</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
 
module.exports = SettingsApiKey;