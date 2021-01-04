import * as React from 'react';
import { Link } from 'react-router-dom';
import { layouts } from 'app/config/layouts';

export default class Menu extends React.Component<{}, {}> {

    public render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="#">CDP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {layouts.map((layout) => {
                        return <li className="nav-item" key={layout.id}>
                            <Link to={'/layout/' + layout.id} className="nav-link">{layout.name}</Link>
                        </li>;
                    })}
                    <li className="nav-item">
                        <Link to={'/control/turnouts'} className="nav-link">Turnouts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/control/signals'} className="nav-link">Signals</Link>
                    </li>
                </ul>
            </div>
        </nav>;
    }
}
