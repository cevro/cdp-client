import { AutoBlockSectorFrontEndDefinition, layout as layout1 } from './layouts/linePuLpM';
import { layout as layout2 } from './layouts/zstPu';
import { FrontendSignal } from 'app/middleware/fronendSignal';
import { FrontendTurnout } from 'app/middleware/frontendTurnout';
import { FrontendSector } from 'app/middleware/frontendSecotr';

export interface LayoutDefinition {
    id: string;
    name: string;
    background?: string;
    cards: {
        turnouts: boolean;
        sectors: boolean;
        ABSectors: boolean;
        signals: boolean;
        routeBuilder: boolean;
        routes: boolean;
    };
    objects: {
        sectors: FrontendSector.LayoutDefinition[]
        signals: FrontendSignal.LayoutDefinition[];
        turnouts: FrontendTurnout.LayoutDefinition[];
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

