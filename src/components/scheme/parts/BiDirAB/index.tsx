import * as React from 'react';
import BiDirAB from './biDirAB';
import { BiDirABDefinition } from 'app/config/layouts';

interface OwnProps {
    ABs: BiDirABDefinition[];
}

export default class BiDirABs extends React.Component<OwnProps, {}> {

    public render() {

        return (<>
            {this.props.ABs.map((sector, key) => {
                return <BiDirAB key={key} definition={sector}/>;
            })}
        </>)
    }
}
