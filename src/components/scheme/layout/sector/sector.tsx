import * as React from 'react';
import { Store } from 'app/reducers';
import { connect } from 'react-redux';
import { getSectorByUId } from 'app/middleware/objectState';
import { sectorSelect } from 'app/actions/routeBuilder';
import { BackendSector } from 'app/consts/interfaces';
import { Action, Dispatch } from 'redux';
import { FrontendSector } from 'app/middleware/frontendSecotr';

interface OwnProps {
    definition: FrontendSector.LayoutDefinition;
}

interface StateProps {
    stateObject: BackendSector.Snapshot;
}

interface DispatchProps {
    onSectorClick(id: number): void;
}

class Sector extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        let {definition: {SVGData}, stateObject, onSectorClick} = this.props;
        return (
            <g className={'sector ' + this.getStatusClassName(stateObject)} onClick={() => {
                onSectorClick(stateObject.sectorId);
            }}>
                {SVGData.points.map((points, index) => {
                    return (<polyline key={index} points={points}/>)
                })}
                {stateObject && stateObject.name &&
                <g transform={'translate(' + (SVGData.label.x) + ',' + (SVGData.label.y) + ')'}>
                    <rect x="-20" width="40" y="-10" height="20" fill="black"/>
                    <text textAnchor="middle" alignmentBaseline="middle">{stateObject.name}</text>
                </g>
                }
            </g>
        );
    }

    private getStatusClassName(stateObject: BackendSector.Snapshot) {
        if (!stateObject) {
            return 'undefined';
        }

        switch (stateObject.state) {
            case 'free' :
                return 'free';
            case 'busy' :
                return 'used';
            default:
                return 'undefined';
        }
    }
}

const mapStateToProps = (state: Store, ownProps: OwnProps): StateProps => {
    return {
        stateObject: getSectorByUId(state, ownProps.definition.sectorUId),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onSectorClick: (id: number) => dispatch(sectorSelect(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sector);



