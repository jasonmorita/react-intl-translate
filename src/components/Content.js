
import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import defaultMessages from '../../i18n/default.json';

const Content = (props) => (
        <section>
            <h1>
                <FormattedMessage id="contentStrings.title" defaultMessage={defaultMessages.contentStrings.title.defaultMessage} />
            </h1>
            <p>
                <FormattedMessage id="contentStrings.content" defaultMessage={defaultMessages.contentStrings.content.defaultMessage} />
            </p>
        </section>
    );

export default Content;
