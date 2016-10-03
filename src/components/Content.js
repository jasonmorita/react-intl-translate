
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

const ContentComponent = (props) => {
    return (
        <section>
            <h1>
                <FormattedMessage id="contentStrings.title" defaultMessage={props.store.intl.defaultMessages.contentStrings.title.defaultMessage} />
            </h1>
            <p>
                <FormattedMessage id="contentStrings.content" defaultMessage={props.store.intl.defaultMessages.contentStrings.content.defaultMessage} />
            </p>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

export const Content = connect(
    mapStateToProps
)(ContentComponent);

export default Content;
