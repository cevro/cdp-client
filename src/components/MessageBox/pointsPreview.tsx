import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { MapObjectState } from 'app/reducers/objectState';
import { changeTurnout } from 'app/actions/messages';
import { ENTITY_TURNOUT } from '@definitions/entity';
import { BackendTurnout } from 'app/consts/interfaces';

interface StateProps {
    turnoutsState: MapObjectState<BackendTurnout.Snapshot>;
}

interface DispatchProps {
    onChangeTurnout(id: number, state: BackendTurnout.EndPosition): void;
}

class TurnoutPreview extends React.Component<StateProps & DispatchProps, {}> {
    public render() {
        const {turnoutsState} = this.props;

        const rows = [];
        for (const turnoutUId in turnoutsState) {
            if (turnoutsState.hasOwnProperty(turnoutUId)) {
                const turnout = turnoutsState[turnoutUId];
                const state = turnout.currentPosition;
                rows.push(<div className="list-group-item" key={turnoutUId}>
                    <div className="row">
                        <span className="col-2">{turnout.name}</span>
                        <span className="col-2">{/*pointState && pointState.changing*/}</span>
                        <span className="col-1">
                            <span className={this.getClassNameByState(state)}>
                               {state === undefined ? 'NA' : state}
                            </span>
                            </span>
                        <div className="col-3">
                            {this.getButton(turnout.turnoutId, state)}
                        </div>
                    </div>
                </div>)
            }
        }

        return (
            <div className="list-group list-scroll">
                {rows}
            </div>
        )
    }

    private getButton(id: number, state: BackendTurnout.Position): JSX.Element {
        const buttons = [];

        if (state === 'U' || state === 'S') {
            buttons.push(<button className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(id, 'D')
                                 }}
            >D</button>);
        }
        if (state === 'U' || state === 'D') {
            buttons.push(<button className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(id, 'S')
                                 }}
            >S</button>);
        }
        return <>{buttons}</>;

    }

    private getClassNameByState(state: BackendTurnout.Position) {
        if (state === undefined) {
            return 'badge badge-undefined';
        }
        switch (state) {
            case 'D':
                return 'badge badge-warning';
            case 'S':
                return 'badge badge-success';
            default:
                return 'badge badge-danger';
        }
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        turnoutsState: state.objectState[ENTITY_TURNOUT],
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onChangeTurnout: (id: number, state: BackendTurnout.EndPosition) => changeTurnout(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnoutPreview);
