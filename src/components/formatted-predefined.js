
import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

const FormattedPredefined = (props) => {
  const translations = defineMessages({
    predefinedTranslation: {
      id: 'PREDEFINED',
      description: 'This translation is defined in a defineMessage.',
      defaultMessage: 'Hello I am predefined in an object.',
    },
  });

  return (
      <div>
        <p>
          <FormattedMessage
            {...translations.predefinedTranslation}
            values={ { name: 'World' } }
          />
        </p>
      </div>
  );
};

export default FormattedPredefined;
