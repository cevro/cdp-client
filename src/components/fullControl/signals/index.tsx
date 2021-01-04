import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import Row from './row';
import { BackendSignal } from 'app/consts/interfaces/signal';
import { MapObjects } from 'app/consts/messages';

interface StateProps {
    states: MapObjects<BackendSignal.Definition>;
}

class SignalsTable extends React.Component<StateProps, {}> {
    public render() {
        const {states} = this.props;
        const rows = [];
        for (const signalUid in states) {
            if (states.hasOwnProperty(signalUid)) {
                rows.push(<Row
                    key={signalUid}
                    state={states[signalUid]}
                />);
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
        states: state.backendStore.signals,
    };
};

export default connect(mapStateToProps, null)(SignalsTable);
