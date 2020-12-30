import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import { MapObjectState } from 'app/reducers/objectState';
import Row from './row';
import { ENTITY_TURNOUT } from '@definitions/entity';
import { BackendTurnout } from 'app/consts/interfaces';

interface StateProps {
    turnoutsState: MapObjectState<BackendTurnout.Snapshot>;
}

class TurnoutsTable extends React.Component<StateProps, {}> {
    public render() {
        const {turnoutsState} = this.props;
        const rows = [];
        for (const turnoutUId in turnoutsState) {
            if (turnoutsState.hasOwnProperty(turnoutUId)) {
                rows.push(<Row
                    key={turnoutUId}
                    turnoutState={turnoutsState[turnoutUId]}
                />)
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
        turnoutsState: state.objectState[ENTITY_TURNOUT],
    };
};

export default connect(mapStateToProps, null)(TurnoutsTable);
