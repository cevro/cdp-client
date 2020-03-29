import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {MapObjectState} from '@app/reducers/objectState';
import Row from './row';
import {SignalState, SignalTypeDefinition} from '@definitions/signals/interfaces';
import {getAllSignals} from '@app/consts/signals/';
import {ENTITY_SIGNAL} from "@definitions/entity";

interface StateProps {
    signalsState: MapObjectState<SignalState>;
}

class SignalsTable extends React.Component<StateProps, {}> {
    public render() {
        const {signalsState} = this.props;
        return (
            <div className="row">
                {this.getSignals().map((signalDef, index) => {
                    return <Row key={index} signalDef={signalDef} signalState={signalsState[signalDef.locoNetId]}/>;
                })}
            </div>
        );
    }

    private getSignals(): SignalTypeDefinition[] {
        return getAllSignals();
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        signalsState: state.objectState[ENTITY_SIGNAL],
    };
};

export default connect(mapStateToProps, null)(SignalsTable);
