import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import Row from './row';
import { BackendSignal } from '@definitions/interfaces';
import { ENTITY_SIGNAL } from '@definitions/entity';
import { MapObjectState } from 'app/reducers/objectState';

interface StateProps {
    signalsState: MapObjectState<BackendSignal.Snapshot>;
}

class SignalsTable extends React.Component<StateProps, {}> {
    public render() {
        const {signalsState} = this.props;
        const rows = [];
        for (const signalUid in signalsState) {
            if (signalsState.hasOwnProperty(signalUid)) {
                rows.push(<Row key={signalUid} signalState={signalsState[signalUid]}/>)
            }
        }
        return (
            <div className="row">
                {rows}
            </div>
        );
    }

}

const mapStateToProps = (state: Store): StateProps => {
    return {
        signalsState: state.objectState[ENTITY_SIGNAL],
    };
};

export default connect(mapStateToProps, null)(SignalsTable);
