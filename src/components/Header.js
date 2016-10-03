
import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { connect } from 'react-redux';

const HeaderComponent = (props) => {
    return (
        <header>
            <div>
                <FormattedMessage id="headerStrings.title" defaultMessage={props.store.intl.defaultMessages.headerStrings.title.defaultMessage} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.welcome" defaultMessage={props.store.intl.defaultMessages.headerStrings.welcome.defaultMessage} values={{name: <b>{props.name}</b>, unreadCount: props.unreadCount}} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.numPhotos" defaultMessage={props.store.intl.defaultMessages.headerStrings.numPhotos.defaultMessage} values={{numPhotos: props.numPhotos}} />
            </div>
            <div>
                <FormattedMessage id="headerStrings.lastLoginString" defaultMessage={props.store.intl.defaultMessages.headerStrings.lastLoginString.defaultMessage} />
                <FormattedDate
                    value={new Date(Number(props.lastLogin))} year='numeric'
                    month='long'
                    day='2-digit'
                />
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

export const Header = connect(
    mapStateToProps
)(HeaderComponent);

export default Header;
