import React from 'react';
 
class Wallet extends React.Component{
    render(){
        return (
            <main className='main'>
                <section className='section wallet'>
                    <div className='wrapper'>
                        <header className='wallet__header'>
                            <h2 className='wallet__title'>Кошелёк</h2>
                            <div className='wallet__btns'>
                                <div className='bills'>
                                    <button className='btn btn-transparent bills__btn'><i className='icon-cog'></i>Настройки</button>
                                    <ul className='bills__list'>
                                        <li className='bills__item'>
                                            <input type='checkbox' className='bills__checkbox' id='billsCheckbox_1' />
                                            <label className='bills__checkbox-label' htmlFor='billsCheckbox_1'>Доллар США, USD</label>
                                        </li>
                                        <li className='bills__item'>
                                            <input type='checkbox' className='bills__checkbox' id='billsCheckbox_2' />
                                            <label className='bills__checkbox-label' htmlFor='billsCheckbox_2'>Доллар США, USD</label>
                                        </li>
                                        <li className='bills__item'>
                                            <input type='checkbox' className='bills__checkbox' id='billsCheckbox_3' />
                                            <label className='bills__checkbox-label' htmlFor='billsCheckbox_3'>Доллар США, USD</label>
                                        </li>
                                    </ul>
                                </div>
                                <button className='btn btn-transparent'>Мои счета</button>
                            </div>
                        </header>
                        <div className='wallet__content'>
                            <table className='wallet__table'>
                                <thead>
                                    <tr>
                                        <th>Валюта</th>
                                        <th>Баланс</th>
                                        <th>В ордерах</th>
                                        <th>...</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>0.00000011</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>EUR</td>
                                        <td>0.00800934</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>RUB</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PLN</td>
                                        <td>0.00000011</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>UAH</td>
                                        <td>0.00000011</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DOGE</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            <button className='btn btn-primary btn--small'>Пополнить</button>
                                            <button className='btn btn-primary btn--small'>Вывести</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='wallet__total'>
                                <div className='wallet__total-sum'>Итого: <span>0.23210045</span></div>
                                <div className='wallet__total-select active'>
                                    <span className='wallet__total-value'>BTC</span>
                                    <ul className='wallet__total-list'>
                                        <li className='wallet__total-list-item'>BTC</li>
                                        <li className='wallet__total-list-item'>USD</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section history-transaction'>
                    <div className='wrapper'>
                        <h2 className='history-transaction__title'>История операций</h2>
                        <div>
                            <table className='history-transaction__table'>
                                <thead>
                                    <tr>
                                        <th>Дата/время</th>
                                        <th>Операция</th>
                                        <th>Валюта</th>
                                        <th>Количество</th>
                                        <th>Статус</th>
                                        <th>Плат. система</th>
                                        <th>Информация</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>30.09 13:52</td>
                                        <td>+ Ввод</td>
                                        <td>UAH</td>
                                        <td>2922</td>
                                        <td>Зачислено</td>
                                        <td>Visa/MasterCard UAH (WayForPay)</td>
                                        <td>#10610971</td>
                                    </tr>
                                    <tr>
                                        <td>30.09 13:52</td>
                                        <td>+ Ввод</td>
                                        <td>UAH</td>
                                        <td>2922</td>
                                        <td>Зачислено</td>
                                        <td>Visa/MasterCard UAH (WayForPay)</td>
                                        <td>#10610971</td>
                                    </tr>
                                    <tr>
                                        <td>30.09 13:52</td>
                                        <td>+ Ввод</td>
                                        <td>UAH</td>
                                        <td>2922</td>
                                        <td>Зачислено</td>
                                        <td>Visa/MasterCard UAH (WayForPay)</td>
                                        <td>#10610971</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className='section refill'>
                    <div className='wrapper'>
                        <header>
                            <a className='back-link link-blue' href='#'><i className='icon-circle-left'></i>Вернуться к выбору валют</a>
                            <h2 className='refill__title'>Пополнение счета</h2>    
                        </header>
                        <div className='refill__content'>
                            <div className='refill__item'>
                                <div className='payments'>
                                    <h4 className='payments__title'>Выберите способ пополнения баланса</h4>
                                    <div className='payments__list'>
                                        <div className='payments__item'>
                                            <input className='payments__input' type='radio' name='payments' id='mastercard' />
                                            <label className='payments__label' htmlFor='mastercard'>
                                                <span className='payments__label-text'>Visa/MasterCard (Simplex)</span>
                                                <figure className='payments__figure'></figure>
                                            </label>
                                        </div>
                                        <div className='payments__item'>
                                            <input className='payments__input' type='radio' name='payments' id='skrill' />
                                            <label className='payments__label' htmlFor='skrill'>
                                                <span className='payments__label-text'>Skrill</span>
                                                <figure className='payments__figure'></figure>
                                            </label>
                                        </div>
                                        <div className='payments__item'>
                                            <input className='payments__input' type='radio' name='payments' id='advcash' />
                                            <label className='payments__label' htmlFor='advcash'>
                                                <span className='payments__label-text'>AdvCash</span>
                                                <figure className='payments__figure'></figure>
                                            </label>
                                        </div>
                                        <div className='payments__item'>
                                            <input className='payments__input' type='radio' name='payments' id='payeer' />
                                            <label className='payments__label' htmlFor='payeer'>
                                                <span className='payments__label-text'>Payeer</span>
                                                <figure className='payments__figure'></figure>
                                            </label>
                                        </div>
                                        <div className='payments__item'>
                                            <input className='payments__input' type='radio' name='payments' id='neteller' />
                                            <label className='payments__label' htmlFor='neteller'>
                                                <span className='payments__label-text'>Neteller</span>
                                                <figure className='payments__figure'></figure>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='refill__item'>
                                <div className='payments'>
                                    <h4 className='payments__title'>Сгенерируйте адрес кошелька для пополнения вашего баланса</h4>
                                    <div className='payments__deposit'>Минимальная сумма депозита 10 DOGE</div>
                                    <ul className='payments__commission'>
                                        <li className='payments__commission-item'>Минимальная 0.01 DASH</li>
                                        <li className='payments__commission-item'>Комиссия 0%</li>
                                    </ul>
                                    <div className='payments__btns'>
                                        <button className='btn btn-primary btn--small'>Создать адрес</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section refill'>
                    <div className='wrapper'>
                        <header>
                            <a className='back-link link-blue' href='#'><i className='icon-circle-left'></i>Вернуться к выбору валют</a>
                            <h2 className='refill__title'>Вывод средств</h2>    
                        </header>
                        <div className='refill__content'>
                            <div className='refill__item'>
                                <div className='payments'>
                                    <h4 className='payments__title'>Выберите способ вывода средств</h4>
                                    <div className='payments__list'>
                                        <div className='payments__item'>
                                            <input className='payments__input' type='radio' name='payments' id='doge' />
                                            <label className='payments__label' htmlFor='doge'>
                                                <span className='payments__label-text'>DOGE</span>
                                                <figure className='payments__figure'></figure>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='refill__item'>
                                <div className='payments'>
                                    <ul className='payments__commission'>
                                        <li className='payments__commission-item'>Минимальная 300 DOGE</li>
                                        <li className='payments__commission-item'>Максимальная 5000000 DOGE</li>
                                        <li className='payments__commission-item'>Комиссия 1 Doge</li>
                                    </ul>
                                    <form className='form payments__form' action='' method='get'>
                                        <div className='form__field'>
                                            <label className='form__label'>Доступно для вывода</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='3206.75824'/>
                                                <span className='payments__coin'>DOGE</span>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Сумма вывода</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='300' />
                                                <span className='payments__coin'>DOGE</span>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Вы получите</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='299' />
                                                <span className='payments__coin'>DOGE</span>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Остаток на счете</label>
                                            <div className='form__field-input'>
                                                <input type='text' value='2906.75824' />
                                                <span className='payments__coin'>DOGE</span>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Адрес кошелька</label>
                                            <div className='form__field-input'>
                                                <input type='text' />
                                            </div>
                                        </div>
                                        {/* <div className='form__field'>
                                            <div className='form__field-input'>
                                                <input type='checkbox' id='saveAgree' />
                                                <label className='form__label' htmlFor='saveAgree'>Сохранить в "Мои счета"</label>
                                            </div>
                                        </div>
                                        <div className='form__field'>
                                            <label className='form__label'>Название счета</label>
                                            <div className='form__field-input'>
                                                <input type='text' />
                                            </div>
                                        </div> */}
                                    </form>
                                    <div className='payments__btns'>
                                        <button className='btn btn-primary btn--small'>Вывести</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
module.exports = Wallet;