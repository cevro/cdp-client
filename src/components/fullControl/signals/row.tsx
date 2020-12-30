import * as React from 'react';
import SignalChange from './signalChange';
import Icon from 'app/components/scheme/parts/signals/contextMenu/icon';
import { FrontendSignal } from 'app/middleware/fronendSignal';
import { BackendSignal } from '@definitions/interfaces';

interface OwnProps {
    signalState: BackendSignal.Snapshot;
}

export default class Row extends React.Component<OwnProps, {}> {
    public render() {
        const {signalState} = this.props;
        const displayState = signalState ? signalState.displayAspect : undefined;
        const requestedState = signalState ? signalState.requestedAspect : undefined;
        return <div className="col-12 row">
            <div className="col-lg-10">
                <h1 className="col-12 text-center">
                    <span className={'badge signal-badge-' + signalState.type}>{signalState.name}</span>
                </h1>
                <hr/>
                <div className="col-12 row">
                    <span className="col-3">Id: {signalState.signalId}</span>
                    <span className="col-3">name: {signalState.name}</span>
                    <span className="col-3">conf: {signalState.lights.join(' ')}</span>
                    <span className="col-3">type: {signalState.type}</span>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span
                        className="col-4">display: ({displayState}) {FrontendSignal.signalStateMapping(displayState)}</span>
                    <span
                        className="col-4">requested: ({requestedState}) {FrontendSignal.signalStateMapping(requestedState)}</span>
                    <span className="col-4">
                            <SignalChange
                                signalId={signalState.signalId}
                                signalState={signalState}/>
                        </span>
                </div>
            </div>
            <div className="col-lg-2">
                <Icon signal={signalState} state={displayState}/>
            </div>
        </div>;
    }
}

