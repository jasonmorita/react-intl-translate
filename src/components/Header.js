
import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import  { headerStrings} from '../../i18n/default.json';

const strings = defineMessages(headerStrings)

const Header = (props) => {
    return (
        <header>
            <div>
                <FormattedMessage id="headerStrings.title" defaultMessage={strings.title.defaultMessage} />
            </div>
        </header>
    );
};

export default Header;
