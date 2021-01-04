import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import {
    Action,
    Dispatch,
} from 'redux';
import { changeSector } from 'app/actions/messages';
import { BackendSector } from 'app/consts/interfaces/sector';
import { FrontendSector } from 'app/middleware/frontendSecotr';

interface OwnProps {
    frontendDef: FrontendSector.LayoutDefinition;
}

interface DispatchProps {
    onChangeSector(sectorUId: string, state: BackendSector.States): void;
}

interface StateProps {
    state: BackendSector.Definition;
}

class SectorRow extends React.Component<StateProps & DispatchProps & OwnProps, {}> {

    public render() {
        const {frontendDef, state} = this.props;
        // const locked = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].locked : null;
        return <div className={'list-group-item ' + this.getClassNameByState(state)}>
            <div className="row">
                <span className="col-12">{frontendDef.sectorUId}</span>
            </div>
            {state && <div className="row">
                <span className="col-2">{state.sectorId}</span>
                <span className="col-2">{state.name}</span>
                <span className="col-2">
                            {this.getStateLabel(state)}
                            </span>
                <div className="col-3">
                    {this.getButton(state)}
                </div>
                <div className="col-3"/>
            </div>}
        </div>;
    }

    private getStateLabel(state: BackendSector.Definition): JSX.Element {
        if (state === undefined) {
            return <span className="badge badge-undefined">NA</span>;
        }
        if (state.occupied) {
            return <span className="badge badge-danger">OCCUPIED</span>;
        }
        if (state.locked) {
            return <span className="badge badge-success">LOCKED</span>;
        }
        return <span className="badge badge-secondary">FREE</span>;
    }

    private getButton(state: BackendSector.Definition): JSX.Element[] {
        const states: BackendSector.States[] = ['free', 'occupied', 'locked'];
        return states.map((status) => {
            return <button
                key={status}
                className="btn btn-primary btn-sm"
                onClick={() => {
                    this.props.onChangeSector(state.sectorUId, status);
                }}
            >Set {status}</button>;
        });
    }

    private getClassNameByState(state: BackendSector.Definition) {
        if (!state) {
            return 'list-item-undefined';
        }
        if (state.occupied) {
            return 'list-item-danger';
        }
        if (state.locked) {
            return 'list-item-success';
        }
        return 'list-item-secondary';
    }
}

const mapStateToProps = (state: Store, ownProps: OwnProps): StateProps => {
    return {
        state: state.backendStore.sectors[ownProps.frontendDef.sectorUId],
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onChangeSector: (id, state) => changeSector(dispatch, id, state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectorRow);
