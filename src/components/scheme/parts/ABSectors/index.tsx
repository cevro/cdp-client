import * as React from 'react';
import AutoBlockSector from './ABSector';
import { AutoBlockSectorFrontEndDefinition } from 'app/config/layouts/linePuLpM';

interface OwnProps {
    autoBlockSectors: AutoBlockSectorFrontEndDefinition[];
}

export default class ABSectors extends React.Component<OwnProps, {}> {

    public render() {
        return <>
            {this.props.autoBlockSectors.map((sector, key) => {
                return <AutoBlockSector key={key} definition={sector}/>;
            })}
        </>;
    }
}
