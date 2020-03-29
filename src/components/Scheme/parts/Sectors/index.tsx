import * as React from 'react';
import Sector from './sector';
import {SectorDefinition} from '@definitions/sectors';

interface Props {
    sectors: SectorDefinition[];
}

export default class Index extends React.Component<Props, {}> {

    public render() {
        return (<>
            {this.props.sectors.map((sector, id) => {
                return <Sector key={id} definition={sector}/>;
            })}
        </>)
    }
}
