import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import AppStore from 'stores/App';
import router from 'router';

const appStore = new AppStore();

ReactDOM.render(
    <Provider appStore={appStore}>
        {router}
    </Provider>,
    document.getElementById('app'),
);
