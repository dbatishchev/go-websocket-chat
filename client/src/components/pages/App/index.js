import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import queryString from 'query-string';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import AppStore from 'stores/AppStore';
import UserStore from 'stores/UserStore';

import styles from './index.scss';

@inject('appStore', 'userStore')
@observer
export default class App extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
        appStore: PropTypes.instanceOf(AppStore).isRequired,
        userStore: PropTypes.instanceOf(UserStore).isRequired,
    };

    constructor(props) {
        super(props);

        this.accessToken = queryString.parse(location.search).accessToken;
        if (this.accessToken) {
            this.props.userStore.fetch(this.accessToken);
        }
    }

    render() {
        return (
            <div className="container">
                <Header user={this.props.userStore.user} />
                {/*todo: error handling */}
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
