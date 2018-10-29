import React from 'react';
 
class Exchange extends React.Component{
    render(){
        return (
            <main className='main'>
                <section className='section exchange'>
                    <div className='wrapper'>
                        <h2 className='exchange__title'>Обмен</h2>
                        <div className='exchange__description'>
                            <p className='exchange__text'>Укажите валюты которые вы хотите обменять</p>
                            <p className='exchange__rate'>1 USD &asymp; 0.00006759 BTC</p>
                        </div>
                        <form className='form exchange__form' method='GET' action=''>
                            <div className='form__field exchange__field'>
                                <label className='form__field-label'>Я отдаю</label>
                                <div className='form__field-input'>
                                    <input type='text' className='form__input-text' />
                                </div>
                                <div className='form__field-select'>
                                    <select>
                                        <option>USD</option>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form__field exchange__field'>
                                <label className='form__field-label'>Я получаю</label>
                                <div className='form__field-input'>
                                    <input type='text' className='form__input-text' />
                                </div>
                                <div className='form__field-select'>
                                    <select>
                                        <option>USD</option>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form__btns exchange__btns'>
                                <button type='submit' className='btn btn-success'>Обмен</button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className='section history-exchange'>
                    <div className='wrapper'>
                        <h2 className='history-exchange__title'>История обмена</h2>
                        <table className='history-exchange__table'>
                            <thead>
                                <tr>
                                    <th>Дата</th>
                                    <th>Валютная пара</th>
                                    <th>Отдал</th>
                                    <th>Средний курс обмена</th>
                                    <th>Получил</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>	
                                    <td>21.05 20:37</td>
                                    <td>HBZ/USD</td>
                                    <td>0.13999999 USD</td>
                                    <td>1 USD ≈ 63.38059412 HBZ</td>
                                    <td>8.87327755 HBZ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        );
    }
}
module.exports = Exchange;