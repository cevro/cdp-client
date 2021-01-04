import * as React from 'react';
import SignalChange from './signalChange';
import Icon from 'app/components/scheme/parts/signals/contextMenu/icon';
import { FrontendSignal } from 'app/middleware/fronendSignal';
import { BackendSignal } from 'app/consts/interfaces/signal';

interface OwnProps {
    state: BackendSignal.Definition | null;
}

export default class Row extends React.Component<OwnProps, {}> {
    public render() {
        const {state} = this.props;
        return <div className="col-12 row">
            <div className="col-lg-10">
                <h1 className="col-12 text-center">
                    <span
                        className={'badge signal-badge-' + state.type}>{state.name}</span>
                </h1>
                <hr/>
                <div className="col-12 row">
                    <span className="col-3">Id: {state.signalUId}</span>
                    <span className="col-3">name: {state.name}</span>
                    <span className="col-3">conf: {state.lights.join(' ')}</span>
                    <span className="col-3">type: {state.type}</span>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span
                        className="col-4">display: ({state && state.displayedAspect})
                        {FrontendSignal.signalStateMapping(state && state.displayedAspect)}</span>
                    <span
                        className="col-4">requested: ({state && state.requestedAspect})
                        {FrontendSignal.signalStateMapping(state && state.requestedAspect)}</span>
                    <span className="col-4">
                        <SignalChange state={state}/>
                    </span>
                </div>
            </div>
            <div className="col-lg-2">
                <Icon state={state}/>
            </div>
        </div>;
    }
}

