var React = require('react');

class SettingsSessions extends React.Component {
    render() {
        return (
            <section className='section sessions'>
                <div className='wrapper'>
                    <h4 className='sessions__title'>Текущая сессия</h4>
                    <table className='sessions__table'>
                        <thead>
                            <tr>
                                <th>IP-адрес</th>
                                <th>Страна</th>
                                <th>Браузер</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>159.224.194.43</td>
                                <td>Ukraine</td>
                                <td>Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like, Gecko) Chrome/68.0.3440.106 Safari/537.36</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className='sessions__title'>Другие активные сессиии</h4>
                    <table className='sessions__table'>
                        <thead>
                            <tr>
                                <th>IP-адрес</th>
                                <th>Страна</th>
                                <th>Браузер</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>159.224.194.43</td>
                                <td>Ukraine</td>
                                <td>Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like, Gecko) Chrome/68.0.3440.106 Safari/537.36</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className='sessions__title'>История авторизаций</h4>
                    <table className='sessions__table'>
                        <thead>
                            <tr>
                                <th>Дата/время</th>
                                <th>IP-адрес</th>
                                <th>Страна</th>
                                <th>Браузер</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2018-08-27 08:37:19</td>
                                <td>159.224.194.43</td>
                                <td>Ukraine</td>
                                <td>Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like, Gecko) Chrome/68.0.3440.106 Safari/537.36</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}
 
module.exports = SettingsSessions;