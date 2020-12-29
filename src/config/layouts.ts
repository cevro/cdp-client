import { TurnoutSchemeDefinition } from '@definitions/turnouts';
import { SectorDefinition } from '@definitions/sectors';
import { AutoBlockSectorFrontEndDefinition, layout as layout1 } from './layouts/linePuLpM';
import { layout as layout2 } from './layouts/zstPu';
import { FrontendSignal } from 'app/middleware/fronendSignal';

export interface LayoutDefinition {
    id: string;
    name: string;
    background?: string;
    cards: {
        points: boolean;
        sectors: boolean;
        ABSectors: boolean;
        signals: boolean;
        routeBuilder: boolean;
        routes: boolean;
    };
    objects: {
        sectors: SectorDefinition[]
        signals: FrontendSignal.LayoutDefinition[];
        turnouts: TurnoutSchemeDefinition[];
        ABSectors: AutoBlockSectorFrontEndDefinition[];
        biDirAB: BiDirABDefinition[];
    };
    viewBox: string;
}

export interface BiDirABDefinition {
    locoNetId: number;
    mainDir: 'L' | 'P';
    SVDData: {
        x: number;
        y: number;
    };
}


export const layouts: LayoutDefinition[] = [
    layout1,
    layout2,
];

