import * as React from 'react';
import Turnout from './turnout';
import {TurnoutDefinition, TurnoutSchemeDefinition} from "@definitions/points";

interface Props {
    points: TurnoutSchemeDefinition[];
}

export default class Turnouts extends React.Component<Props, {}> {

    public render() {

        return (<>
            {this.props.points.map((signal, signalId) => {
                return <Turnout key={signalId} definition={signal}/>;
            })}
        </>)
    }
}
