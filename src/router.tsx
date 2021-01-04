import * as React from 'react';
import MainMenu from './components/mainMenu';
import { Route, Switch } from 'react-router';
import Scheme from 'app/components/scheme/scheme';
import TurnoutsTable from 'app/components/fullControl/turnouts';
import SignalsTable from 'app/components/fullControl/signals';

interface State {
    route: string;
}

export default class Router extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1),
        };
    }

    public componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1),
            });
        });
    }

    public render() {
        return (
            <Switch>
                <Route path={'/control/signals'}>
                    <div className="container">
                        <SignalsTable/>
                    </div>
                </Route>
                <Route path={'/control/turnouts'}>
                    <div className="container">
                        <TurnoutsTable/>
                    </div>
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

