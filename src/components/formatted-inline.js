
import React from 'react';
import { FormattedMessage } from 'react-intl';

const FormattedInline = (props) => {
  return (
      <div>
        <p>
          <FormattedMessage
            id="INLINE"
            description="This translation is created inline of the code"
            defaultMessage="I am formatted in attributes inline."
          />
        </p>
      </div>
  );
};

export default FormattedInline;
