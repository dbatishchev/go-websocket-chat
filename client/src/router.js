import React from 'react';
import {browserHistory, Route, Router, IndexRoute} from 'react-router';
import App from 'components/pages/App';
import Chat from 'components/pages/Chat';
import Error from 'components/pages/Error';

// todo: create conditional routing config

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Chat} />
            <Route path="/chat" component={Chat}/>
            <Route path="*" component={Error}/>
        </Route>
    </Router>
);
