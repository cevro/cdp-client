import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { changeTurnout } from 'app/actions/messages';
import { BackendTurnout } from 'app/consts/interfaces';

interface DispatchProps {
    onChangeTurnout(state: BackendTurnout.EndPosition): void;
}

interface OwnProps {
    turnoutState: BackendTurnout.Snapshot | null;
}

class TurnoutChange extends React.Component<DispatchProps & OwnProps, {}> {
    public render() {
        const {turnoutState} = this.props;
        const buttons = [];
        const state = turnoutState ? turnoutState.currentPosition : 0;
        if (state !== 'D') {
            buttons.push(<button key={'-'} className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout('D')
                                 }}
            >Set position closed (-)</button>);
        }
        if (state !== 'S') {
            buttons.push(<button key={'+'} className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout('S')
                                 }}
            >Set position (+)</button>);
        }
        return <>{buttons}</>;
    }

}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: OwnProps): DispatchProps => {
    return {
        onChangeTurnout: (state: BackendTurnout.EndPosition) => changeTurnout(dispatch, ownProps.turnoutState.turnoutId, state),
    };
};

export default connect(null, mapDispatchToProps)(TurnoutChange);
