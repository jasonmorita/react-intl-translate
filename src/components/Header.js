
import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { headerStrings } from '../../i18n/default.json';

const Header = (props) => (
        <header>
            <div>
                <FormattedMessage id="headerStrings.title" defaultMessage={headerStrings.title.defaultMessage} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.welcome" defaultMessage={headerStrings.welcome.defaultMessage} values={{name: <b>{props.name}</b>, unreadCount: props.unreadCount}} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.numPhotos" defaultMessage={headerStrings.numPhotos.defaultMessage} values={{numPhotos: props.numPhotos}} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.lastLoginString" defaultMessage={headerStrings.lastLoginString.defaultMessage} />
                <FormattedDate
                    value={new Date(Number(props.lastLogin))} year='numeric'
                    month='long'
                    day='2-digit'
                />
            </div>
        </header>
    );

export default Header;
