
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    NavLink,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import routes from '../routes';

import './Root.scss';

class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    {Object.keys(routes).map(path => {

                        const {label, ...rest} = routes[path];

                        return (
                            <Link key={path} to={path}>{label}</Link>
                        );
                    })}
                </div>
                <Switch>
                    {Object.keys(routes).map(path => {

                        const {label, ...rest} = routes[path];

                        return (
                            <Route key={path} path={path} {...rest} />
                        );
                    })}
                </Switch>
            </Router>
        );
    }
}

export default Root;