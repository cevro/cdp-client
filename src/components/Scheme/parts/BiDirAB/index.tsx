import * as React from 'react';
import BiDirAB from './biDirAB';
import {BiDirABDefinition} from '@app/schemes';

interface Props {
    ABs: BiDirABDefinition[];
}

export default class BiDirABs extends React.Component<Props, {}> {

    public render() {

        return (<>
            {this.props.ABs.map((sector, key) => {
                return <BiDirAB key={key} definition={sector}/>;
            })}
        </>)
    }
}
