import * as React from 'react';
import {MapObjectState} from '@app/reducers/objectState';
import {AutoBlockSectorFrontEndDefinition} from '@app/schemes/linePuLpM';
import {Store} from '@app/reducers';
import {connect} from 'react-redux';
import Row from "./row";
import {ENTITY_AB_SECTOR} from "@definitions/entity";
import {ABSectorState} from "@app/consts/interfaces";

interface StateProps {
    ABSectorsState?: MapObjectState<ABSectorState>;
}

interface OwnProps {
    ABSectors: AutoBlockSectorFrontEndDefinition[];
}

interface State {
    displayOnlyInterest: boolean;
}

class Index extends React.Component<StateProps & OwnProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            displayOnlyInterest: false,
        };
    }

    public render() {
        const {ABSectors, ABSectorsState} = this.props;

        return (
            <div className="list-group list-scroll">
                <div className="list-group-item">
                    <button className={'btn btn-secondary'} onClick={() => {
                        this.setState({displayOnlyInterest: !this.state.displayOnlyInterest});
                    }}>{this.state.displayOnlyInterest ? 'Display all' : 'Display only interest'}</button>
                </div>
                {ABSectors.map((sectorDef, index) => {
                    const stateObject = ABSectorsState[sectorDef.locoNetId];
                    return <Row key={index}
                                definition={sectorDef}
                                displayOnlyInterest={false}
                                objectState={stateObject}/>
                })}
            </div>
        );
    }

}

const mapStateToProps = (state: Store): StateProps => {
    return {
        ABSectorsState: state.objectState[ENTITY_AB_SECTOR],
    };
};

export default connect(mapStateToProps, null)(Index);
