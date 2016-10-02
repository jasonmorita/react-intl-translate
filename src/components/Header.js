
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { headerStrings } from '../../i18n/default.json';

const state = {
    name       : 'Eric',
    unreadCount: 1000,
    numPhotos: 54
};

const Header = (props) => {

    const {name, unreadCount, numPhotos} = state;

    return (
        <header>
            <div>
                <FormattedMessage id="headerStrings.title" defaultMessage={headerStrings.title.defaultMessage} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.welcome" defaultMessage={headerStrings.welcome.defaultMessage} values={{name: <b>{name}</b>, unreadCount}} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.numPhotos" defaultMessage={headerStrings.numPhotos.defaultMessage} values={{numPhotos: numPhotos}} />
            </div>
        </header>
    );
};

export default Header;
