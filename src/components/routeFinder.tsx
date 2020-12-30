import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { Store } from '../reducers';
import { findRoute } from '../actions/routeBuilder';
import { ENTITY_SIGNAL } from 'app/consts/entity';
import { BackendSignal } from 'app/consts/interfaces';
import { MapObjectState } from 'app/reducers/objectState';

interface StateProps {
    startSignal: number;
    endSector: number;
    signals: MapObjectState<BackendSignal.Snapshot>;
}

interface DispatchProps {
    onFindRoute(signalId: number, sectorId: number): void;
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
        onFindRoute: (signalId: number, sectorId: number) => findRoute(dispatch, signalId, sectorId),
    };
};

const mapStateToProps = (state: Store): StateProps => {
    return {
        startSignal: state.routeBuilder.startSignalId,
        endSector: state.routeBuilder.endSectorId,
        signals: state.objectState[ENTITY_SIGNAL],
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder);
