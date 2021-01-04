import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { Store } from '../reducers';
import { findRoute } from '../actions/routeBuilder';
import { BackendSignal } from 'app/consts/interfaces/signal';
import { MapObjects } from 'app/consts/messages';

interface StateProps {
    startSignal: string;
    endSector: string;
    signals: MapObjects<BackendSignal.Definition>;
}

interface DispatchProps {
    onFindRoute(signalUId: string, sectorUId: string): void;
}

class RouteFinder extends React.Component<StateProps & DispatchProps, {}> {

    public render() {
        return null;
        const {startSignal, endSector, signals} = this.props;
        let signal = null;
        if (startSignal !== undefined) {
            signal = signals.filter((def) => {
                return def.signalId === startSignal;
            })[0];
        }
        let sector = null;
        if (endSector !== undefined) {
            sector = sectors.filter((def) => {
                return def.id === endSector;
            })[0];
        }
        return (<div className="card-body">
            <div className="row">
                <span>Start signal:</span>
                <span>{signal && signal.name}</span>
            </div>
            <div className="row">
                <span>End sector:</span>
                <span>{sector && sector.name}</span>
            </div>
            <div className="row">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        this.props.onFindRoute(startSignal, endSector);
                    }}
                    disabled={!(sector && signal)}
                >Find
                </button>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onFindRoute: (signalUId: string, sectorUId: string) => findRoute(dispatch, signalUId, sectorUId),
    };
};

const mapStateToProps = (state: Store): StateProps => {
    return {
        startSignal: state.routeBuilder.startSignalUId,
        endSector: state.routeBuilder.endSectorUId,
        signals: state.backendStore.signals,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder);
