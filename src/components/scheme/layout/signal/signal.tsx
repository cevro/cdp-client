import * as React from 'react';
import { connect } from 'react-redux';
import { signalSelect } from 'app/actions/routeBuilder';
import { toggleContextMenu } from 'app/actions/signalContextMenu';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { BackendSignal } from 'app/consts/interfaces/signal';
import './signal.scss';
import { FrontendSignal } from 'app/middleware/fronendSignal';

interface OwnProps {
    frontendDefinition: FrontendSignal.LayoutDefinition;
}

interface StateProps {
    state: BackendSignal.Definition;
    displayLabel: boolean;
}

interface DispatchProps {
    onSignalSelect(): void;

    onSignalContextMenu(coordinates: { x: number, y: number }): void;
}

class Signal extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        const {
            state,
            onSignalSelect,
            onSignalContextMenu,
            displayLabel,
            frontendDefinition: {
                SVGData: {x, y, rotate},
            },
        } = this.props;
        const aspect = state ? state.displayedAspect : undefined;
        const type = state ? state.type : 'undefined';
        return (
            <g
                className={'signal signal-type-' + type + ' ' + this.getStateClassName(aspect)}
                transform={'translate(' + x + ',' + y + ')'}
                onClick={() => {
                    onSignalSelect();
                }}
                onContextMenu={(event) => {
                    event.preventDefault();
                    onSignalContextMenu({x: event.pageX, y: event.pageY});
                    return false;
                }}
            >
                {displayLabel && (<g transform={'translate(0,-10)'}>
                    <text>{state ? state.name : null}</text>
                </g>)}
                {this.getIconByType(type, rotate)}
            </g>
        );
    }

    private getIconByType(type: BackendSignal.Type | 'undefined', rotate: number): JSX.Element {
        switch (type) {
            case 'shunt':
                return <polyline
                    points="0,7 7,0 0,-7"
                    transform={'rotate(' + rotate + ')'}
                />;
            case 'auto_block':
                return <>
                    <polyline
                        points="0,7 7,0 0,-7"
                        transform={'rotate(' + rotate + ')'}
                    />
                    <polyline
                        points="-4,7 3,0 -4,-7"
                        transform={'rotate(' + rotate + ')'}
                    />
                </>;
            default:
                return <polygon
                    transform={'rotate(' + rotate + ')'}
                    points="0,10 10,0 0,-10"
                />;
        }
    }

    private getStateClassName(state: number): string {
        if (state === undefined || state === -1) {
            return 'state-undefined';
        }
        switch (state) {
            case 0:
                return 'state-not-allowed';
            case 13:
                return 'state-off';
            case 5:
                return 'state-lockout';
            case 9:
            case 10:
                return 'state-shunt';
            default:
                return 'state-allowed';
        }
    }
}

const mapStateToProps = (store: Store, ownProps: OwnProps): StateProps => {
    const state = store.backendStore.signals[ownProps.frontendDefinition.signalUId];
    return {
        state: state,
        displayLabel: state ? !!store.displayOptions.signals[state.type] : true,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>, ownProps: OwnProps): DispatchProps => {
    return {
        onSignalSelect: () => dispatch(signalSelect(ownProps.frontendDefinition.signalUId)),
        onSignalContextMenu: (coordinates: { x: number, y: number }) =>
            dispatch(toggleContextMenu(ownProps.frontendDefinition.signalUId, coordinates)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);


