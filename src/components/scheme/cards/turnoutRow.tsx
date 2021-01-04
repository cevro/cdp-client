import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { changeTurnout } from 'app/actions/messages';
import { BackendTurnout } from 'app/consts/interfaces/turnout';
import { FrontendTurnout } from 'app/middleware/frontendTurnout';

interface OwnProps {
    frontendDef: FrontendTurnout.LayoutDefinition;
}

interface StateProps {
    state: BackendTurnout.Definition;
}

interface DispatchProps {
    onChangeTurnout(turnoutUId: string, state: BackendTurnout.EndPosition): void;
}

class TurnoutRow extends React.Component<StateProps & DispatchProps & OwnProps, {}> {
    public render() {
        const {frontendDef, state} = this.props;
        return <div className="list-group-item">
            <div className="row">
                <span className="col-12">{frontendDef.turnoutUId}</span>
            </div>
            {state && state && <div className="row">
                <span className="col-2">{state.name}</span>
                <span className="col-1">
                            <span className={this.getClassNameByState(state.currentPosition)}>
                               {state.currentPosition}
                            </span>
                            </span>
                <div className="col-3">
                    {this.getButton(state.turnoutUId, state.currentPosition)}
                </div>
            </div>}

        </div>;
    }

    private getButton(turnoutUId: string, state: BackendTurnout.Position): JSX.Element {
        const buttons = [];

        if (state === 'U' || state === 'S') {
            buttons.push(<button className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(turnoutUId, 'D');
                                 }}
            >D</button>);
        }
        if (state === 'U' || state === 'D') {
            buttons.push(<button className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(turnoutUId, 'S');
                                 }}
            >S</button>);
        }
        return <>{buttons}</>;

    }

    private getClassNameByState(state: BackendTurnout.Position): string {
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

const mapStateToProps = (store: Store, ownProps: OwnProps): StateProps => {
    return {
        state: store.backendStore.turnouts[ownProps.frontendDef.turnoutUId],
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onChangeTurnout: (turnoutUId: string, state: BackendTurnout.EndPosition) => changeTurnout(dispatch, turnoutUId, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnoutRow);
