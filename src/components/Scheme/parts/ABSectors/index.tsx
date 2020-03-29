import * as React from 'react';
import AutoBlockSector from './ABSector';
import {AutoBlockSectorFrontEndDefinition} from '@app/schemes/linePuLpM';

interface Props {
    autoBlockSectors: AutoBlockSectorFrontEndDefinition[];
}

export default class ABSectors extends React.Component<Props, {}> {

    public render() {

        return (<>
            {this.props.autoBlockSectors.map((sector, key) => {
                return <AutoBlockSector key={key} definition={sector}/>;
            })}
        </>)
    }
}
