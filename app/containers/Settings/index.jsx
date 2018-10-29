import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsAside from '../../components/Settings/Aside.jsx';
import SettingsNotification from '../../components/Settings/Notifications.jsx';
import SettingsApiKey from '../../components/Settings/ApiKey.jsx';
import SettingsSecurity from '../../components/Settings/Security.jsx';
import SettingsPassword from '../../components/Settings/Password.jsx';
import SettingsIpAddress from '../../components/Settings/IpAddress.jsx';
import SettingsSessions from '../../components/Settings/Sessions.jsx';

class Settings extends Component {
    render() {
        return (
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
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Settings);