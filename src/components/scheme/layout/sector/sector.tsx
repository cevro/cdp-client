import * as React from 'react';
import { Store } from 'app/reducers';
import { connect } from 'react-redux';
import { sectorSelect } from 'app/actions/routeBuilder';
import { BackendSector } from 'app/consts/interfaces/sector';
import { Action, Dispatch } from 'redux';
import { FrontendSector } from 'app/middleware/frontendSecotr';
import './sector.scss';

interface OwnProps {
    definition: FrontendSector.LayoutDefinition;
}

interface StateProps {
    state: BackendSector.Definition;
}

interface DispatchProps {
    onSectorClick(sectorUId: string): void;
}

class Sector extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        let {definition: {SVGData}, state, onSectorClick} = this.props;
        return (
            <g className={'sector ' + this.getStatusClassName(state)} onClick={() => {
                onSectorClick(state.sectorUId);
            }}>
                {SVGData.points.map((points, index) => {
                    return (<polyline key={index} points={points}/>);
                })}
                {state && state.name &&
                <g transform={'translate(' + (SVGData.label.x) + ',' + (SVGData.label.y) + ')'}>
                    <rect x="-20" width="40" y="-10" height="20" fill="black"/>
                    <text textAnchor="middle" alignmentBaseline="middle">{state.name}</text>
                </g>
                }
            </g>
        );
    }

    private getStatusClassName(state: BackendSector.Definition) {
        if (!state) {
            return 'undefined';
        }
        if (state.occupied) {
            return 'occupied';
        }
        if (state.locked) {
            return 'locked';
        }
        return 'free';
    }
}

const mapStateToProps = (state: Store, ownProps: OwnProps): StateProps => {
    return {
        state: state.backendStore.sectors[ownProps.definition.sectorUId],
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onSectorClick: (sectorUId: string) => dispatch(sectorSelect(sectorUId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sector);



