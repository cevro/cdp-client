import * as React from 'react';
import SignalChange from './signalChange';
import Icon from '@app/components/Scheme/parts/signals/contextMenu/icon';
import {signalStateMapping} from '@app/middleware/signal';
import {signalTypes} from '@definitions/signals/signalTypes';
import {SignalState, SignalTypeDefinition} from '@definitions/signals/interfaces';

interface Props {
    signalDef: SignalTypeDefinition;
    signalState: SignalState;
}

export default class Row extends React.Component<Props, {}> {
    public render() {
        const {signalDef, signalState} = this.props;
        const displayState = signalState ? signalState.displayAspect : undefined;
        const requestedState = signalState ? signalState.requestedAspect : undefined;
        return <div className="col-12 row">
            <div className="col-lg-10">
                <h1 className="col-12 text-center">
                    <span className={'badge signal-badge-' + signalDef.type}>{signalDef.name}</span>
                </h1>
                <hr/>
                <div className="col-12 row">
                    <span className="col-3">locoNetId: {signalDef.locoNetId}</span>
                    <span className="col-3">name: {signalDef.name}</span>
                    <span className="col-3">conf: {signalDef.lights.join(' ')}</span>
                    <span className="col-3">type: {signalTypes.getLabel(signalDef.type)}</span>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span className="col-4">display: ({displayState}) {signalStateMapping(displayState)}</span>
                    <span
                        className="col-4">requested: ({requestedState}) {signalStateMapping(requestedState)}</span>
                    <span className="col-4">
                            <SignalChange
                                locoNetId={signalDef.locoNetId}
                                signalState={signalState}/>
                        </span>
                </div>
            </div>
            <div className="col-lg-2">
                <Icon signal={signalDef} state={displayState}/>
            </div>
        </div>;
    }
}

