import * as React from 'react';
import BiDirABs from '../parts/BiDirAB';
import Signal from './signal/signal';
import Turnout from './turnout/turnout';
import Sector from './sector/sector';
import { LayoutDefinition } from 'app/config/layouts';

interface OwnProps {
    scheme: LayoutDefinition;
}

export default class Layout extends React.Component<OwnProps, {}> {

    public render() {
        const scheme = this.props.scheme;
        return (
            <svg viewBox={scheme.viewBox} style={{width: '100%'}}>
                <g dangerouslySetInnerHTML={{__html: scheme.background}}/>

                {scheme.objects.sectors.map((sector, id) => {
                    return <Sector key={id} definition={sector}/>;
                })}
                {scheme.objects.turnouts.map((turnoutDef, turnoutId) => {
                    return <Turnout key={turnoutId} definition={turnoutDef}/>;
                })}
                {scheme.objects.signals.map((signal, signalUId) => {
                    return <Signal key={signalUId} frontendDefinition={signal}/>;
                })}
                <BiDirABs ABs={scheme.objects.biDirAB}/>

            </svg>

        );
    }
}
// <ABSectors autoBlockSectors={scheme.objects.ABSectors}/>
// <g className="bg-scheme">
//                     <polyline points="0,0 2100,0"/>
//                     <polyline points="0,30 2100,30"/>
//                     <polyline points="0,60 2000,60"/>
//
//                     <polyline points="150,0 200,30"/>
//                     <polyline points="125,60 175,30"/>
//                     <polyline points="225,30 275,0"/>
//                     <polyline points="275,30 325,60"/>
//
//                     <polyline points="350,0 400,-30 1575,-30 1625,0"/>
//                     <polyline points="400,-30 450,-60 1000,-60 1050,-30"/>
//
//                     <polyline points="400,30 600,150 1450,150"/>
//                     <polyline points="500,90 1725,90 1850,210 1900,210"/>
//                     <polyline points="550,90 600,120 1725,120 1850,240 1900,240"/>
//
//                     <polyline points="375,60 725,270 1100,270 1200,210"/>
//                     <polyline points="575,180 1400,180"/>
//                     <polyline points="625,210 1350,210 1500,120"/>
//                     <polyline points="675,210 725,240 1500,240"/>
//
//                     <polyline points="1425,0 1475,30"/>
//                     <polyline points="1500,30 1700,150"/>
//                     <polyline points="1600,120 1700,60"/>
//
//                     <polyline points="1750,60 1800,90"/>
//
//                     <polyline points="1775,60 1825,30"/>
//                     <polyline points="1850,30 1900,0"/>
//
//                     <polyline points="1700,30 1650,0"/>
//                 </g>
