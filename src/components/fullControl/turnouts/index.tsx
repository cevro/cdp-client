import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';
import {TurnoutsState} from '@app/reducers/objectState';
import {autoBlockPuLpM} from '@app/schemes/linePuLpM';
import Row from './row';
import {TurnoutSchemeDefinition,} from '@definitions/turnouts/';
import {ENTITY_TURNOUT} from "@definitions/entity";

interface State {
    turnoutsState?: TurnoutsState;
}

class TurnoutsTable extends React.Component<State, {}> {
    public render() {
        const {turnoutsState} = this.props;
        return (
            <div className="container">
                <table className="table table-hover table-striped table-dark">
                    <tbody>
                    {this.getTurnouts().map((turnoutDef, index) => {
                        return <Row key={index}
                                    turnoutDef={turnoutDef}
                                    turnoutState={turnoutsState[turnoutDef.locoNetId]}/>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    private getTurnouts(): TurnoutSchemeDefinition[] {
        return [...autoBlockPuLpM.objects.turnouts/*, ...getAllTurnouts()*/];
    }
}

const mapStateToProps = (state: Store): State => {
    return {
        turnoutsState: state.objectState[ENTITY_TURNOUT],
    };
};

export default connect(mapStateToProps, null)(TurnoutsTable);
