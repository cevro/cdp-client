import * as React from 'react';
import { Store } from 'app/reducers';
import { connect } from 'react-redux';
import Row from './row';
import { AutoBlockSectorFrontEndDefinition } from 'app/config/layouts/linePuLpM';
import { MapObjects } from 'app/consts/messages';

interface StateProps {
    ABSectorsState: MapObjects<any>;
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
                                objectState={stateObject}/>;
                })}
            </div>
        );
    }

}

const mapStateToProps = (state: Store): StateProps => {
    return {
        ABSectorsState: {}, // state.backendStore[ENTITY_AB_SECTOR],
    };
};

export default connect(mapStateToProps, null)(Index);
