import * as React from 'react';
import Icon from './icon';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { toggleContextMenu } from 'app/actions/signalContextMenu';
import { BackendSignal } from 'app/consts/interfaces/signal';

interface OwnProps {
}

interface DispatchProps {
    onCloseContext(): void;
}

interface StateProps {
    signalUId: string | null;
    state: BackendSignal.Definition;
    coordinates: {
        x: number;
        y: number;
    };
}

class ContextMenu extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        const {state, coordinates, onCloseContext} = this.props;
        if (!state) {
            return null;
        }
        return (
            <div className="signal-context-menu"
                 style={{
                     position: 'absolute',
                     left: coordinates.x,
                     top: coordinates.y,
                 }}>
                <h3 className="card-header">
                            <span
                                className={'badge signal-badge-' + state.type}>{state.name}</span>
                    <button type="button" className="close" aria-label="Close" onClick={() => {
                        onCloseContext();
                    }}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </h3>
                <div>
                    <div className="text-center py-1" style={{maxHeight: '100%'}}>
                        <Icon state={state}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        signalUId: state.signalContextMenu.signalUId,
        coordinates: state.signalContextMenu.coordinates,
        state: state.backendStore.signals[state.signalContextMenu.signalUId],
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onCloseContext: () => dispatch(toggleContextMenu(null, null)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);


