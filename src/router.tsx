import * as React from 'react';
import FullControl from './components/fullControl/';
import MainMenu from './components/mainMenu';
import { Route, Switch } from 'react-router';
import Scheme from 'app/components/scheme/scheme';

interface State {
    route: string;
}

export default class Router extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1),
        }
    }

    public componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1),
            })
        })
    }

    public render() {
        return (
            <Switch>
                <Route path={'/control/signals'}>
                    <FullControl/>
                </Route>
                <Route path={'/control/turnouts'}>
                    <FullControl/>
                </Route>
                <Route path={'/layout/:layout'}>
                    <Scheme/>
                </Route>
                <Route>
                    <MainMenu/>
                </Route>
            </Switch>
        );
    }
}

