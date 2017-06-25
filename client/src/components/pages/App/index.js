import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import AppStore from 'stores/App';
import styles from './index.scss';

@inject('appStore')
@observer
export default class App extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        appStore: PropTypes.instanceOf(AppStore).isRequired,
    };

    render() {
        return (
            <div>
                <Header />
                {/*todo: error handling */}
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
