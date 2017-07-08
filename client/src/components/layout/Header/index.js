import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

export default class Header extends Component {

    static propTypes = {
        user: PropTypes.object,
    };

    /**
     * @param {User} user
     * @returns {XML}
     */
    static renderUserPanel(user) {
        return (
            <div className="user-panel pull-right">
                <div className="user-panel__avatar">
                    <img src={user.avatar_url} />
                </div>
                <div className="user-panel__username">
                    {user.name}
                </div>
            </div>
        );
    }

    /**
     * @returns {XML}
     */
    static renderLoginButtons() {
        return (
            <ul className="nav nav-pills pull-right">
                <li role="presentation"><a href="/login">Login</a></li>
            </ul>
        );
    }

    render() {
        const user = this.props.user;

        return (
            <div className="header clearfix">
                <nav>
                    { user ? Header.renderUserPanel(user) : Header.renderLoginButtons() }
                </nav>
                <h3 className="text-muted">Golang Websocket Chat</h3>
            </div>
        );
    }
}