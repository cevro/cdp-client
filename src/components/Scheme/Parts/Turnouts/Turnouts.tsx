import * as React from 'react';
import Turnout from './Turnout';
import {TurnoutDefinition, TurnoutSchemeDefinition} from "@definitions/points";

interface Props {
    points: TurnoutSchemeDefinition[];
}

export default class Turnouts extends React.Component<Props, {}> {

    public render() {

        return (<g>
            {this.props.points.map((signal, signalId) => {
                return <g key={signalId}>
                    <Turnout definition={signal}/>
                </g>;
            })}
        </g>)
    }
}
