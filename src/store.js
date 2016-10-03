
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import compose from 'lodash.compose';
import reducer from './reducer';
import { IntlProvider, addLocaleData } from 'react-intl';

let store = createStore(reducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
