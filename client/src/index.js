import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import AppStore from 'stores/AppStore';
import UserStore from 'stores/UserStore';
import router from 'router';

const appStore = new AppStore();
const userStore = new UserStore();

ReactDOM.render(
    <Provider appStore={appStore} userStore={userStore}>
        {router}
    </Provider>,
    document.getElementById('app'),
);
