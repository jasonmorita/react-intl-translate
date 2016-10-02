
import React from 'react';
import { FormattedMessage } from 'react-intl';
import defaultMessages from '../../i18n/default.json';

const Header = (props) => {
    return (
        <header>
            <div>
                <FormattedMessage id="headerStrings.title" defaultMessage={defaultMessages.headerStrings.title.defaultMessage} />
            </div>
        </header>
    );
};

export default Header;
