
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import FormattedInline from './components/formatted-inline';
import FormattedPredefined from './components/formatted-predefined';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import esMessages from '../i18n/es-ES.json';
import fr from 'react-intl/locale-data/fr';
import frMessages from '../i18n/fr-FR.json';

const locale = {
    short: en,
    name: 'en-US',
    messages: null
}

addLocaleData(locale.short);

const App = (props) => {
  return (
      <IntlProvider locale={ locale.name } messages={ locale.messages }>
        <div>
            <FormattedInline {...props} />
            <FormattedPredefined {...props} />
        </div>
      </IntlProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
