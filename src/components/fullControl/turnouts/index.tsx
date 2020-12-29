import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from 'app/reducers';
import {MapObjectState} from 'app/reducers/objectState';
import Row from './row';
import {getAllTurnouts, TurnoutDefinition} from '@definitions/turnouts/';
import {ENTITY_TURNOUT} from "@definitions/entity";
import {TurnoutState} from "app/consts/interfaces";

interface StateProps {
    turnoutsState: MapObjectState<TurnoutState>;
}

class TurnoutsTable extends React.Component<StateProps, {}> {
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

    private getTurnouts(): TurnoutDefinition[] {
        return [...getAllTurnouts()];
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        turnoutsState: state.objectState[ENTITY_TURNOUT],
    };
};

export default connect(mapStateToProps, null)(TurnoutsTable);
