import * as React from 'react';
import Icon from './icon';
import { getSignalByUid } from 'app/middleware/objectState';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { toggleContextMenu } from 'app/actions/signalContextMenu';
import { Signal } from 'app/consts/signals/interfaces';

interface OwnProps {
}

interface DispatchProps {
    onCloseContext(): void;
}

interface StateProps {
    signalUId: string | null;
    stateObject: Signal.State;
    coordinates: {
        x: number;
        y: number;
    };
}

class ContextMenu extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        const {stateObject, coordinates, onCloseContext} = this.props;
        const state = stateObject ? stateObject.displayAspect : undefined;

        if (!stateObject) {
            return null;
        }
        return (
            <div className="signal-context-menu"
                 style={{
                     position: 'absolute',
                     left: coordinates.x,
                     top: coordinates.y,
                 }}>
                {stateObject ? (<>
                        <h3 className="card-header">
                            <span className={'badge signal-badge-' + stateObject.type}>{stateObject.name}</span>
                            <button type="button" className="close" aria-label="Close" onClick={() => {
                                onCloseContext();
                            }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </h3>
                        <div>
                            <div className="text-center py-1" style={{maxHeight: '100%'}}>
                                <Icon state={state} signal={stateObject}/>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        signalUId: state.signalContextMenu.signalUId,
        coordinates: state.signalContextMenu.coordinates,
        stateObject: getSignalByUid(state, state.signalContextMenu.signalUId),
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onCloseContext: () => dispatch(toggleContextMenu(null, null)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);

