import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


import imgChart from '../../images/chart.jpg';
 
class Trade extends React.Component{
    render(){
        return (
            <main className='main'>
                <section className='section trading'>
                    <div className='wrapper'>
                        {/* Row */}
                        <div className='trading__row'>
                            <div className='trading__item'>
                                <div className='main-pair'>
                                    <label className='main-pair__label'>BTC/USD</label>
                                    <span className='text-negative'>Low:</span> 6544.51 USD /
                                    <span className='text-positive'>High:</span> 7339.8 USD
                                    <span className='text-positive'>0.63%</span>
                                </div>

                                <figure className='widget-chart'>
                                    <img src={imgChart} />
                                </figure>
                            </div>

                            <div className='trading__item'>
                                <div className='tickets'>
                                    <div className='tickets__search icon-search'>
                                        <input type='text' placeholder='Search' />
                                    </div>
                                    <nav className='tickets__top-pair'>
                                        <a className='tickets__btn active'>Избранное</a>
                                        <a className='tickets__btn'>BTC</a>
                                        <a className='tickets__btn'>ETH</a>
                                        <a className='tickets__btn'>XRP</a>
                                        <a className='tickets__btn'>BCH</a>
                                        <a className='tickets__btn'>EOS</a>
                                        <a className='tickets__btn'>Fiat</a>
                                    </nav>
                                    <div className='tickets__content'>
                                        <div className='tickets__table'>
                                            <table className='tickets__table-head'>
                                                <thead>
                                                    <tr>
                                                        <th><a href='#'><i className='icon-star-full'></i></a></th>
                                                        <th>Пара</th>
                                                        <th>Покупка</th>
                                                        <th>Продажа</th>
                                                        <th>Изменения</th>
                                                    </tr>
                                                </thead>
                                            </table>

                                            <Scrollbars className='scrollbar' style={{ width: '100%',height: 400 }}>
                                                <table className='tickets__table-body'>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-full'></i></a></td>
                                                            <td>BTC/USD</td>
                                                            <td>6656.23</td>
                                                            <td>6656.33</td>
                                                            <td className='text-negative'>0.48%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-full'></i></a></td>
                                                            <td>BTC/EUR</td>
                                                            <td>5729.13</td>
                                                            <td>5757.81</td>
                                                            <td className='text-positive'>0.1%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>BTC/RUB</td>
                                                            <td>441360</td>
                                                            <td>441499.1</td>
                                                            <td className='text-positive'>0.61%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>BTC/UAH</td>
                                                            <td>185000</td>
                                                            <td>185587.36</td>
                                                            <td className='text-positive'>0.04%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>BTC/PLN</td>
                                                            <td>23804.05</td>
                                                            <td>24704.60</td>
                                                            <td className='text-positive'>4.74%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>NEO/BTC</td>
                                                            <td>0.00250334</td>
                                                            <td>0.00252886</td>
                                                            <td className='text-positive'>0.58%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>NEO/BTC</td>
                                                            <td>0.00250334</td>
                                                            <td>0.00252886</td>
                                                            <td className='text-positive'>0.58%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>ADA/BTC</td>
                                                            <td>0.00001159</td>
                                                            <td>0.00001168</td>
                                                            <td className='text-positive'>0.34%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>ZRX/BTC</td>
                                                            <td>0.00014004</td>
                                                            <td>0.0001426</td>
                                                            <td className='text-positive'>7.72%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>GNT/BTC</td>
                                                            <td>0.00002291</td>
                                                            <td>0.00002326</td>
                                                            <td className='text-positive'>0.47%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>TRX/BTC</td>
                                                            <td>0.00000367</td>
                                                            <td>0.00000372</td>
                                                            <td className='text-positive'>0.81%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>GNT/BTC</td>
                                                            <td>0.00002291</td>
                                                            <td>0.00002326</td>
                                                            <td className='text-positive'>0.47%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>GAS/BTC</td>
                                                            <td>0.00079244</td>
                                                            <td>0.0008033</td>
                                                            <td className='text-positive'>1.62%</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href='#'><i className='icon-star-empty'></i></a></td>
                                                            <td>INK/BTC</td>
                                                            <td>0.00000292</td>
                                                            <td>0.00000298</td>
                                                            <td className='text-negative'>1.01%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Scrollbars>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Row */}
                        <div className='trading__row'>
                            <div className='trading__item'>
                                <div className='market'>
                                    <ul className='market__nav'>
                                        <li className='market__nav-item active'>По лимиту</li>
                                        <li className='market__nav-item'>По рынку</li>
                                    </ul>

                                    <div className='market__forms'>
                                        <div className='market__buy'>
                                            <h4 className='market__title'>Покупка, ADA</h4>
                                            <form className='form'>
                                                <div className='form__field'>
                                                    <label className='form__label'>Количество</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>ADA</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Цена</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Итого</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Комиссия</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>ADA</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Остаток</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__btns'>
                                                    <button type='submit' className='btn btn-primary btn--small'>Купить ADA</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className='market__sell'>
                                            <h4 className='market__title'>Продажа, ADA</h4>
                                            <form className='form'>
                                                <div className='form__field'>
                                                    <label className='form__label'>Количество</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Цена</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Итого</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Комиссия</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__field'>
                                                    <label className='form__label'>Остаток</label>
                                                    <div className='form__field-input'>
                                                        <input type='text' />
                                                        <span className='form__field-coin'>USD</span>
                                                    </div>
                                                </div>
                                                <div className='form__btns'>
                                                    <button type='submit' className='btn btn-primary btn--small'>Продать ADA</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='trading__item'>
                                <div className='orders'>
                                    <nav className='orders__nav'>
                                        <ul className='orders__list'>
                                            <li className='orders__item active'>Активные ордера</li>
                                            <li className='orders__item'>История торгов</li>
                                        </ul>

                                        <div className='orders__cancel'>Отмена ордера
                                            <ul className='orders__cancel-list'>
                                                <li className='orders__cancel-item'></li>
                                                <li className='orders__cancel-item'></li>
                                                <li className='orders__cancel-item'></li>
                                            </ul>
                                        </div>
                                    </nav>
                                    
                                    <div className='orders__table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Дата</th>
                                                    <th>Операция</th>
                                                    <th>Цена</th>
                                                    <th>Количество</th>
                                                    <th>Сумма</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <Scrollbars className='scrollbar' style={{ width: '100%',height: 290 }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>30.09 15:49</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.00037</td>
                                                    <td>1.27324037</td>
                                                    <td>0.00047109</td>
                                                    <td><i className='icon-cross'></i></td>
                                                </tr>
                                                <tr>
                                                    <td>30.09 15:49</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>602.7230299</td>
                                                    <td>0.22300752</td>
                                                    <td>0.00047109</td>
                                                    <td><i className='icon-cross'></i></td>
                                                </tr>
                                                <tr>
                                                    <td>30.09 14:58</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.00036701</td>
                                                    <td>2.74243094</td>
                                                    <td>0.00100649</td>
                                                    <td><i className='icon-cross'></i></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='orders__empty'>Нет информации для отображения</div>
                                        </Scrollbars>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row */}
                        <div className='trading__row'>
                            <div className='trading__item flex-space-between'>
                                <div className='orders-sell'>
                                    <h5 className='orders-sell__title'>Ордера на продажу</h5>
                                    <div className='orders-sell__label'>Объём: 2741253 XRP</div>
                                    <div className='orders-sell__table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Цена</th>
                                                    <th>ADA</th>
                                                    <th>USD</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <Scrollbars className='scrollbar' style={{ width: '100%', height: 290 }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>0.0777759</td>
                                                    <td>80.76814</td>
                                                    <td>6.28181477</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07777595</td>
                                                    <td>1497.5</td>
                                                    <td>116.469485</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07777597</td>
                                                    <td>961.997815</td>
                                                    <td>74.8203132</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078</td>
                                                    <td>1479.10911</td>
                                                    <td>115.370510</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07807735</td>
                                                    <td>1.75430012</td>
                                                    <td>0.1369711</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078255</td>
                                                    <td>555.664175</td>
                                                    <td>43.4835000</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07825833</td>
                                                    <td>0.0100798</td>
                                                    <td>0.00078882</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07777597</td>
                                                    <td>961.997815</td>
                                                    <td>74.8203132</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078</td>
                                                    <td>1479.10911</td>
                                                    <td>115.370510</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07807735</td>
                                                    <td>1.75430012</td>
                                                    <td>0.1369711</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078255</td>
                                                    <td>555.664175</td>
                                                    <td>43.4835000</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07825833</td>
                                                    <td>0.0100798</td>
                                                    <td>0.00078882</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </Scrollbars>
                                    </div>
                                </div>
                                <div className='orders-buy'>
                                    <h5 className='orders-buy__title'>Ордера на покупку</h5>
                                    <div className='orders-buy__label'>Объём: 250571 USD</div>
                                    <div className='orders-buy__table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Цена</th>
                                                    <th>ADA</th>
                                                    <th>USD</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <Scrollbars className='scrollbar' style={{ width: '100%',height: 290 }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>0.0777759</td>
                                                    <td>80.76814</td>
                                                    <td>6.28181477</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07777595</td>
                                                    <td>1497.5</td>
                                                    <td>116.469485</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07777597</td>
                                                    <td>961.997815</td>
                                                    <td>74.8203132</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078</td>
                                                    <td>1479.10911</td>
                                                    <td>115.370510</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07807735</td>
                                                    <td>1.75430012</td>
                                                    <td>0.1369711</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078255</td>
                                                    <td>555.664175</td>
                                                    <td>43.4835000</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07825833</td>
                                                    <td>0.0100798</td>
                                                    <td>0.00078882</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07777597</td>
                                                    <td>961.997815</td>
                                                    <td>74.8203132</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078</td>
                                                    <td>1479.10911</td>
                                                    <td>115.370510</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07807735</td>
                                                    <td>1.75430012</td>
                                                    <td>0.1369711</td>
                                                </tr>
                                                <tr>
                                                    <td>0.078255</td>
                                                    <td>555.664175</td>
                                                    <td>43.4835000</td>
                                                </tr>
                                                <tr>
                                                    <td>0.07825833</td>
                                                    <td>0.0100798</td>
                                                    <td>0.00078882</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </Scrollbars>
                                    </div>
                                </div>
                            </div>

                            <div className='trading__item flex-space-between'>
                                <div className='orders-history'>
                                    <h5 className='orders-history__title'>История торгов</h5>
                                    <div className='orders-history__table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Дата</th>
                                                    <th>Операция</th>
                                                    <th>Цена</th>
                                                    <th>Количество</th>
                                                    <th>Сумма</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <Scrollbars className='scrollbar' style={{ width: '100%',height: 290 }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>17.10 13:47</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.077258</td>
                                                    <td>1080</td>
                                                    <td>83.43864</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 13:37</td>
                                                    <td  className='text-positive'>buy</td>
                                                    <td>0.0776357</td>
                                                    <td>1173</td>
                                                    <td>91.0666761</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 13:25</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0776357</td>
                                                    <td>1200</td>
                                                    <td>92.88768</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 13:22</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0776074</td>
                                                    <td>937.6</td>
                                                    <td>72.7646982</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 13:17</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.0770437</td>
                                                    <td>1100</td>
                                                    <td>84.74807</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:58</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.077493</td>
                                                    <td>1000</td>
                                                    <td>77.493</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:54</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0775486</td>
                                                    <td>1015.4</td>
                                                    <td>78.7428484</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:52</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.07690004</td>
                                                    <td>80.93</td>
                                                    <td>6.22352023</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:50</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.07733</td>
                                                    <td>908</td>
                                                    <td>70.21564</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:47</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.0770844</td>
                                                    <td>859</td>
                                                    <td>66.2154996</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:41</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.07712</td>
                                                    <td>1100</td>
                                                    <td>84.832</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:32</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.077034</td>
                                                    <td>1185.6</td>
                                                    <td>91.3315104</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:29</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.07777603</td>
                                                    <td>18.6</td>
                                                    <td>1.39996854</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:27</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.0771427</td>
                                                    <td>1120</td>
                                                    <td>86.399824</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:20</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.077608</td>
                                                    <td>900</td>
                                                    <td>69.8472</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:12</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.077438</td>
                                                    <td>888</td>
                                                    <td>68.764944</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:07</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0774018</td>
                                                    <td>843.4</td>
                                                    <td>65.2806781</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 12:00</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.077259</td>
                                                    <td>1169.5</td>
                                                    <td>90.3544005</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 11:56</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0776739</td>
                                                    <td>806.2</td>
                                                    <td>62.6206981</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 11:48</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0776401</td>
                                                    <td>892</td>
                                                    <td>69.2549692</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 11:30</td>
                                                    <td className='text-negative'>sell</td>
                                                    <td>0.077268</td>
                                                    <td>1049</td>
                                                    <td>81.054132</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 11:11</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.077307</td>
                                                    <td>914.4</td>
                                                    <td>70.6895208</td>
                                                </tr>
                                                <tr>
                                                    <td>17.10 11:06</td>
                                                    <td className='text-positive'>buy</td>
                                                    <td>0.0774378</td>
                                                    <td>1021.9</td>
                                                    <td>79.1328703</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </Scrollbars>
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
module.exports = Trade;