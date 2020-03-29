import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {SignalsState} from '@app/reducers/objectState';
import Row from './row';
import {SignalTypeDefinition} from '@definitions/signals/interfaces';
import {getAllSignals} from '@app/consts/signals/';
import {ENTITY_SIGNAL} from "@definitions/entity";

interface State {
    signalsState?: SignalsState;
}

class SignalsTable extends React.Component<State, {}> {
    public render() {
        const {signalsState} = this.props;
        return (
            <div className="container">
                <table className="table table-hover table-striped table-dark">
                    <tbody>
                    {this.getSignals().map((signalDef, index) => {
                        return <tr key={index}>
                            <Row signalDef={signalDef} signalState={signalsState[signalDef.locoNetId]}/>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    private getSignals(): SignalTypeDefinition[] {
        return getAllSignals();
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        signalsState: state.objectState[ENTITY_SIGNAL],
    };
};
const mapDispatchToProps = (): State => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalsTable);
