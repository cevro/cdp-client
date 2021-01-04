import * as React from 'react';
import { Link } from 'react-router-dom';
import { layouts } from 'app/config/layouts';

export default class MainMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <ul>
                {layouts.map((layout) => {
                    return <li key={layout.id}>
                        <Link to={'/layout/' + layout.id}>{layout.name}</Link>
                    </li>;
                })}
                <li>
                    <Link to={'/control/turnouts'}>Turnouts</Link>
                </li>
                <li>
                    <Link to={'/control/signals'}>Signals</Link>
                </li>
            </ul>
        </div>;
    }
}

