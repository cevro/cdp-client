import * as React from 'react';
import Turnout from './turnout';
import { TurnoutSchemeDefinition} from "@definitions/turnouts";

interface Props {
    points: TurnoutSchemeDefinition[];
}

export default class Index extends React.Component<Props, {}> {

    public render() {

        return (<>
            {this.props.points.map((signal, signalId) => {
                return <Turnout key={signalId} definition={signal}/>;
            })}
        </>)
    }
}
