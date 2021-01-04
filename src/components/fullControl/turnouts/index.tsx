import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import Row from './row';
import { BackendTurnout } from 'app/consts/interfaces/turnout';
import { MapObjects } from 'app/consts/messages';

interface StateProps {
    states: MapObjects<BackendTurnout.Definition>;
}

class TurnoutsTable extends React.Component<StateProps, {}> {
    public render() {
        const {states} = this.props;
        const rows = [];
        for (const turnoutUId in states) {
            if (states.hasOwnProperty(turnoutUId)) {
                rows.push(<Row
                    key={turnoutUId}
                    state={states[turnoutUId]}
                />);
            }
        }
        return (
            <div className="container">
                <table className="table table-hover table-striped table-dark">
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        states: state.backendStore.turnouts,
    };
};

export default connect(mapStateToProps, null)(TurnoutsTable);
