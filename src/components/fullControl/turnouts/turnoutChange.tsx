import * as React from 'react';
import {connect} from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import {changeTurnout} from '@app/actions/messages';
import {TurnoutState} from '@definitions/interfaces';
import {RequestedTurnoutPosition} from '@definitions/turnouts';

interface DispatchProps {
    onChangeTurnout(state: RequestedTurnoutPosition): void;
}

interface OwnProps {
    turnoutState?: TurnoutState;
    locoNetId: number
}

class TurnoutChange extends React.Component<DispatchProps & OwnProps, {}> {
    public render() {
        const {turnoutState} = this.props;
        const buttons = [];
        const state = turnoutState ? turnoutState.position : 0;
        if (state !== -1) {
            buttons.push(<button key={'-'} className="btn btn-sm btn-secondary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(-1)
                                 }}
            >Set position closed (-)</button>);
        }
        if (state !== 1) {
            buttons.push(<button key={'+'} className="btn btn-sm btn-primary"
                                 onClick={() => {
                                     this.props.onChangeTurnout(1)
                                 }}
            >Set position (+)</button>);
        }
        return <>{buttons}</>;
    }

}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: OwnProps): DispatchProps => {
    return {
        onChangeTurnout: (state: RequestedTurnoutPosition) => changeTurnout(dispatch, ownProps.locoNetId, state),
    };
};

export default connect(null, mapDispatchToProps)(TurnoutChange);
