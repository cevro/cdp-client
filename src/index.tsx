import * as React from 'react';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import { app } from './reducers/';
import Router from './router';
import * as ReactDOM from 'react-dom';
import Downloader from 'app/components/helpers/downloader';
import Menu from 'app/menu';
import { HashRouter } from 'react-router-dom';

class Main extends React.Component<{}, {}> {

    public render() {
        const store = createStore(app, applyMiddleware(logger));
        return (
            <HashRouter>
                <Provider store={store}>
                    <>
                        <Menu/>
                        <Router/>
                        <Downloader/>
                    </>
                </Provider>
            </HashRouter>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);
