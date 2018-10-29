var React = require('react');

var SettingsAside = require('../settings/Aside.js');
var SettingsNotification = require('../settings/Notifications.js');
var SettingsApiKey = require('../settings/ApiKey.js');
var SettingsSecurity = require('../settings/Security.js');
var SettingsPassword = require('../settings/Password.js');
var SettingsIpAddress = require('../settings/IpAddress.js');
var SettingsSessions = require('../settings/Sessions.js');

class Settings extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section settings'>
                    <div className='wrapper flex-space-between-stretch'>
                        <SettingsAside />

                        <article className='settings__content'>
                            <SettingsNotification />
                            <SettingsApiKey />
                            <SettingsSecurity />
                            <SettingsPassword />
                            <SettingsIpAddress />
                            <SettingsSessions />
                        </article>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Settings;