
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import {FormattedNumber} from 'react-intl';
import { Provider, connect } from 'react-redux';
import store from './store';
import Container from './components/Container';

const mapIntlStateToProps = (state) => {
  const { locale, messages } = state.intl;
  return { locale, messages };
};

const ConnectIntlProvider = connect(mapIntlStateToProps)(IntlProvider);

const App = () => (
    <Provider store={ store }>
        <ConnectIntlProvider>
            <Container name="Dr. Frankenstein" selectValue="a" unreadCount="45676" numPhotos="65" lastLogin="1459832991883" />
        </ConnectIntlProvider>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
