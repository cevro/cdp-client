import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { MapObjectState } from 'app/reducers/objectState';
import { changeSector } from 'app/actions/messages';
import { ENTITY_SECTOR } from '@definitions/entity';
import { BackendSector } from 'app/consts/interfaces';
import { FrontendSector } from 'app/middleware/frontendSecotr';

interface OwnProps {
    sectors: FrontendSector.LayoutDefinition[];
}

interface DispatchProps {
    onChangeSector(id: number, state: BackendSector.State): void;
}

interface StateProps {
    sectorsState: MapObjectState<BackendSector.Snapshot>;
}

class SectorsPreview extends React.Component<StateProps & DispatchProps & OwnProps, {}> {

    public render() {
        const {sectors, sectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                {sectors.map((sectorDef, index) => {
                    // sectorsState[id];
                    // sectorDef.id;
                    const state: BackendSector.Snapshot = sectorsState[sectorDef.sectorUId] ? sectorsState[sectorDef.sectorUId] : undefined;
                    //const locked = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].locked : null;
                    if (!state) {
                        return null;
                    }
                    return <div className={'list-group-item ' + this.getClassNameByState(state.state)} key={index}>
                        <div className="row">
                            <span className="col-2">{state.sectorId}</span>
                            <span className="col-2">{state.name}</span>
                            <span className="col-2">
                                {this.getStateLabel(state.state)}
                            </span>
                            <div className="col-3">
                                {this.getButton(state.sectorId, state.state)}
                            </div>
                            <div className="col-3"/>
                        </div>
                    </div>
                })}
            </div>
        )
    }

    private getStateLabel(state: BackendSector.State): JSX.Element {
        if (state === undefined) {
            return <span className="badge badge-undefined">NA</span>;
        }
        switch (state) {
            case 'busy':
                return <span className="badge badge-danger">OCCUPIED</span>;
            case 'free':
                return <span className="badge badge-success">FREE</span>;
            case 'undefined':
                return <span className="badge badge-undefined">NA</span>;
            default:
                return <span className="badge badge-secondary">WTF</span>;
        }

    }

    private getButton(id: number, state: BackendSector.State): JSX.Element[] {
        const buttons = [];
        if (state !== 'free') {
            buttons.push(<button key={0} className="btn btn-success btn-sm"
                                 onClick={() => {
                                     this.props.onChangeSector(id, 'free')
                                 }}
            >Set free</button>);
        }
        if (state !== 'busy') {
            buttons.push(<button key={1} className="btn btn-danger btn-sm"
                                 onClick={() => {
                                     this.props.onChangeSector(id, 'busy')
                                 }}
            >Set busy</button>)
        }

        return buttons;
    }

    private getClassNameByState(state: BackendSector.State) {
        if (state === undefined) {
            return 'list-item-undefined';
        }
        switch (state) {
            case 'busy':
                return 'list-item-danger';
            case 'free':
                return 'list-item-success';
            case 'undefined':
                return 'list-item-undefined';
            default:
                return 'list-item-secondary';
        }
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        sectorsState: state.objectState[ENTITY_SECTOR],
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onChangeSector: (id, state) => changeSector(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectorsPreview);
