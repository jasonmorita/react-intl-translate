
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import compose from 'lodash.compose';
import {FormattedNumber} from 'react-intl';
import { Provider } from "react-redux";
import reducer from './components/reducer';
import Container from './components/Container';

import es from 'react-intl/locale-data/es';
addLocaleData([...es]);

let store = createStore(reducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const App = () => (
    <Provider store={ store }>
        <IntlProvider locale={ store.getState().intl.locale } messages={ store.getState().intl.messages }>
            <Container name="Dr. Frankenstein" unreadCount="45676" numPhotos="65" lastLogin="1459832991883" />
        </IntlProvider>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
