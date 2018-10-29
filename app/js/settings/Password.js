var React = require('react');

class SettingsPassword extends React.Component {
    render() {
        return (
            <section className='section password'>
                <div className='wrapper'>
                    <div className='alert-danger'>
                        <p className='alert-danger__text'>
                            Обратите внимание: при внесении изменений в профиль устанавливается заморозка на вывод средств в течение 3 дней
                        </p>
                    </div>

                    <form className='form'>
                        <div className='form__field'>
                            <label className='form__label'>Текущий пароль</label>
                            <div className='form__field-input'>
                                <input type='text' placeholder='Текущий пароль' />
                            </div>
                        </div>
                        <div className='form__field'>
                            <label className='form__label'>Новый пароль</label>
                            <div className='form__field-input'>
                                <input type='text' placeholder='Новый пароль' />
                            </div>
                        </div>
                        <div className='form__field'>
                            <label className='form__label'>Повторите палоль</label>
                            <div className='form__field-input'>
                                <input type='text' placeholder='Повторите палоль' />
                            </div>
                        </div>
                        <div className='form__btns'>
                            <button className='btn btn-primary btn--small'>Отправить</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
 
module.exports = SettingsPassword;