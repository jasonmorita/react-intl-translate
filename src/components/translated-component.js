
import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
const TranslatedComponent = (props) => {

  const translations = defineMessages({
    predefinedTranslation: {
      id: 'PREDEFINED',
      defaultMessage: 'Hello I am predefined',
      description: 'This translation is defined in a defineMessage.',
    },
  });

  return (
      <div>
        <p>1
          <FormattedMessage
            {...translations.predefinedTranslation}
            values={ { name: 'World' } }
          />
        </p>
        <p>2
          <FormattedMessage
            id="INLINE"
            defaultMessage="Oh it's you again, I am defined inline of a Formatted message!"
            description="This translation is created inline of the code"
          />
        </p>
      </div>
  );
};

export default TranslatedComponent;
