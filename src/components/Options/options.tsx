import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from 'app/reducers';
import {
    toggleTurnoutText,
    toggleSignalText,
} from 'app/actions/displayOptions';
import { displayOptionsState } from 'app/reducers/displayOptions';
import { BackendSignal } from 'app/consts/interfaces/signal';

interface StateProps {
    displayState: displayOptionsState;
}

interface DispatchProps {
    onToggleSignal(type: BackendSignal.Type): void;

    onToggleTurnouts(): void;
}

class Options extends React.Component<StateProps & DispatchProps, {}> {

    public render() {
        const {displayState} = this.props;
        return (<div className="card-body row">
            <div className="col-6">
                <h6>Toggle label on signals</h6>
                {['entry', 'exit', 'path', 'auto_block', 'shunt'].map((type: BackendSignal.Type) => {
                    return <div className="row" key={type}>
                        <button className="btn btn-link" onClick={() => {
                            this.props.onToggleSignal(type);
                        }}>
                    <span
                        className={displayState.signals[type] ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                            <span
                                className={'ml-3 badge signal-badge-' + type}>{type}</span>
                        </button>
                    </div>;
                })
                }
            </div>
            <div className="col-6">
                <div className="row">
                    <button className="btn btn-link" onClick={() => {
                        this.props.onToggleTurnouts();
                    }}>
                    <span
                        className={displayState.turnouts ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o'}/>
                        <span className={'ml-3 badge badge-secondary'}>toggle turnouts on</span>
                    </button>
                </div>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onToggleSignal: (type: BackendSignal.Type) => dispatch(toggleSignalText(type)),
        onToggleTurnouts: () => dispatch(toggleTurnoutText()),
    };
};

const mapStateToProps = (state: Store): StateProps => {
    return {
        displayState: state.displayOptions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
