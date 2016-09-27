
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import TranslatedComponent from './components/translated-component';
import es from 'react-intl/locale-data/es';
import esMessages from '../i18n/es-ES.json';
import fr from 'react-intl/locale-data/fr';
import frMessages from '../i18n/fr-FR.json';

const locale = {
    short: fr,
    name: 'fr-FR',
    messages: frMessages
}

addLocaleData(locale.short);

const App = (props) => {
  return (
      <IntlProvider locale={ locale.name } messages={ locale.messages }>
        <TranslatedComponent {...props} />
      </IntlProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
