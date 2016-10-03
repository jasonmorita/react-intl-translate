
import React from 'react';
import store from '../store';
import Header from './Header'
import Content from './Content'

const Container = (props) => {
    const setLang = (locale, messages) => store.dispatch({
        type: 'INTL_CHANGE_LOCALE',
        payload: {
            locale: locale,
            messages: messages
        }
    });

    return (
        <div>
            <Header {...props} />
                <Content />
            <button onClick={() => setLang('en', null)}>Set locale to en</button>
            <button onClick={() => setLang('es', 'esMessages')}>Set locale to es-ES</button>
        </div>
    );
};

export default Container;
