import { combineReducers } from 'redux';
import {defaultMessages} from '../../i18n/default.json';
import esMessages from '../../i18n/es-ES.json';

const initialState = {
    locale: 'es',
    messages: esMessages,
    defaultMessages
};

const intl = (state = initialState, action) => {
    switch (action.type) {
        case "INTL_CHANGE_LOCALE":
            return Object.assign({}, state, locale: action.payload.locale);
        default:
            return state;
    }
}

export default combineReducers({
  intl
});
