import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import { changeABDir } from 'app/actions/messages';
import {
    Action,
    Dispatch,
} from 'redux';
import { BiDirABDefinition } from 'app/config/layouts';

interface OwnProps {
    definition: BiDirABDefinition;
}

interface StateProps {
    stateObject: any;
}

interface DispatchProps {
    onChangeDir(id: string, dir: -1 | 1): void;
}

class BiDirAB extends React.Component<OwnProps & StateProps & DispatchProps, {}> {
    public render() {
        const {
            stateObject,
            definition,
        } = this.props;
        const dir = stateObject ? stateObject.dir : undefined;

        return (
            <g className={'bi-dir-AB'}
               transform={'translate(' + definition.SVDData.x + ',' + definition.SVDData.y + ')'}>
                <g className={'dir-display ' + this.getDirClassName(definition.mainDir, 'L', dir)}>
                    <rect width={30} height={20} x={-30} y={-10} onClick={() => {
                        this.props.onChangeDir(definition.locoNetId.toString(), (definition.mainDir === 'L') ? 1 : -1);
                    }}/>
                    <polyline points="-20,-10 -30,0 -20,10"/>
                    <polyline points="-30,0 0,0"/>

                </g>
                <g className={'dir-display ' + this.getDirClassName(definition.mainDir, 'P', dir)}>
                    <rect width={30} height={20} x={0} y={-10} onClick={() => {
                        this.props.onChangeDir(definition.locoNetId.toString(), (definition.mainDir === 'P') ? 1 : -1);
                    }}/>
                    <polyline points="20,-10 30,0 20,10"/>
                    <polyline points="30,0 0,0"/>
                </g>
            </g>
        );
    }

    private getDirClassName(mainDir: 'L' | 'P', arrow: 'L' | 'P', dir: any): string {
        if (dir === undefined || dir === 0) {
            return 'undefined';
        }
        if (dir === 1) {
            return (mainDir === arrow) ? 'active' : 'inactive';
        }
        if (dir === -1) {
            return (mainDir === arrow) ? 'inactive' : 'active';
        }
        return 'undefined';
    }

}

const mapStateToProps = (state: Store, ownProps: OwnProps): StateProps => {
    return {
        stateObject: null,// getBiDirABState(state, ownProps.definition.locoNetId.toString()),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onChangeDir: (id, dir) => changeABDir(dispatch, id, dir),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BiDirAB);


