import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import { getTurnoutByUId } from 'app/middleware/objectState';
import { BackendTurnout} from 'app/consts/interfaces';
import { Action, Dispatch } from 'redux';
import { FrontendTurnout } from 'app/middleware/frontendTurnout';

interface OwnProps {
    definition: FrontendTurnout.LayoutDefinition;
}

interface StateProps {
    stateObject: BackendTurnout.Snapshot;
    displayLabel: boolean;

}

interface DispatchProps {
    onTurnoutClick(id: number): void;
}

class Turnout extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        const {
            stateObject,
            displayLabel,
            definition: {
                SVGData: {x, y, rotate, dir},
            },
        } = this.props;
        const position = stateObject ? stateObject.currentPosition : undefined;
        const requestedState = stateObject ? stateObject.requestedPosition : undefined;
        return (
            <g className={'point ' + this.getStateClassName(position, false, (requestedState !== position))}
               transform={'translate(' + x + ',' + y + ')'}>
                {displayLabel && <g transform={'translate(0,-10)'}>
                    <text>{stateObject.name}</text>
                </g>}

                <g transform={'rotate(' + rotate + ')'}>
                    <polygon points={'0,-10 10,-10 10,10 0,10'} fill="black"/>
                    {(!position || (position === stateObject.basePosition)) ?
                        <line x1={0} x2={10} y1={0} y2={0}/> : null}
                    {(!position || (position !== stateObject.basePosition)) ?
                        <line x1={0} x2={10} y1={0} y2={(dir === 'L') ? (-6) : (6)}/> : null}

                </g>
            </g>
        );
    }

    private getStateClassName(state: BackendTurnout.Position | null, lock: boolean, changing: boolean): string {
        if (changing) {
            return 'changing';
        }
        if (!state) {
            return 'undefined';
        }
        if (lock) {
            return 'locked';
        }
        return 'not-locked';
    }

}

const mapStateToProps = (state: Store, ownProps: OwnProps): StateProps => {
    return {
        stateObject: getTurnoutByUId(state, ownProps.definition.turnoutUId),
        displayLabel: state.displayOptions.points,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onTurnoutClick: (id) => null,// dispatch(signalSelect(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Turnout);


