import * as React from 'react';
import Signal from './signal';
import {SignalSchemeDefinition} from "@app/schemes";

interface Props {
    signals: SignalSchemeDefinition[];
}

export default class Index extends React.Component<Props, {}> {

    public render() {
        return (<>
            {this.props.signals.map((signal, signalId) => {
                return <Signal key={signalId} definition={signal}/>;
            })}
        </>)
    }
}
