import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { changeTurnout } from 'app/actions/messages';
import { BackendTurnout } from 'app/consts/interfaces/turnout';

interface DispatchProps {
    onChangeTurnout(state: BackendTurnout.EndPosition): void;
}

interface OwnProps {
    state: BackendTurnout.Definition;
}

class TurnoutChange extends React.Component<DispatchProps & OwnProps, {}> {
    public render() {
        const {state} = this.props;
        const buttons = [];
        const position = state ? state.currentPosition : 0;
        if (position !== 'D') {
            buttons.push(<button key={'-'} className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout('D');
                                 }}
            >Set position closed (-)</button>);
        }
        if (position !== 'S') {
            buttons.push(<button key={'+'} className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout('S');
                                 }}
            >Set position (+)</button>);
        }
        return <>{buttons}</>;
    }

}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: OwnProps): DispatchProps => {
    return {
        onChangeTurnout: (state: BackendTurnout.EndPosition) => changeTurnout(dispatch, ownProps.state.turnoutUId, state),
    };
};

export default connect(null, mapDispatchToProps)(TurnoutChange);
