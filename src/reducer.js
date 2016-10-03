import { combineReducers } from 'redux';
import { addLocaleData } from 'react-intl';

import { defaultMessages } from '../i18n/default.json';
import esMessages from '../i18n/es-ES.json';

import es from 'react-intl/locale-data/es';
addLocaleData([...es]);

const messages = {
    esMessages
};

const initialState = {
    locale: 'es',
    messages: esMessages,
    defaultMessages
};

const intl = (state = initialState, action) => {
    switch (action.type) {
        case "INTL_CHANGE_LOCALE":
            return Object.assign({}, state, {
                locale: action.payload.locale,
                messages: messages[action.payload.messages]
            });
        default:
            return state;
    }
}

export default combineReducers({
  intl
});
