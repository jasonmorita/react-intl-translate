
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import Container from './components/Container';

import es from 'react-intl/locale-data/es';
import esMessages from '../i18n/es-ES.json';

addLocaleData([...es]);

const App = (props) => {
  return (
      <IntlProvider locale="es" messages={ esMessages }>
        <Container />
      </IntlProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
