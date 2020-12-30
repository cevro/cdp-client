import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { changeSignal } from 'app/actions/messages';
import { FrontendSignal } from 'app/middleware/fronendSignal';
import { BackendSignal } from 'app/consts/interfaces';

interface StateProps {
    onChangeSignal(state: number): void;
}

interface OwnProps {
    signalState: BackendSignal.Snapshot | null;
    signalId: number
}

class SignalChange extends React.Component<StateProps & OwnProps, {}> {
    public render() {
        const {signalState} = this.props;
        return (
            <select className={'form-control'} value={signalState ? signalState.displayAspect : -1} onChange={(e) => {
                if (+e.target.value !== -1) {
                    this.props.onChangeSignal(+e.target.value);
                }
            }}>
                {[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => {
                    return <option key={value}
                                   value={value}>({value}) {FrontendSignal.signalStateMapping(value)}</option>
                })}
            </select>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: OwnProps): StateProps => {
    return {
        onChangeSignal: (aspect) => changeSignal(dispatch, ownProps.signalId, aspect),
    };
};

export default connect(null, mapDispatchToProps)(SignalChange);
