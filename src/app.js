
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import {FormattedNumber} from 'react-intl';
import { Provider } from 'react-redux';
import store from './store';
import Container from './components/Container';

import es from 'react-intl/locale-data/es';
addLocaleData([...es]);

const App = () => (
    <Provider store={ store }>
        <IntlProvider locale={ store.getState().intl.locale } messages={ store.getState().intl.messages }>
            <Container name="Dr. Frankenstein" unreadCount="45676" numPhotos="65" lastLogin="1459832991883" />
        </IntlProvider>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
