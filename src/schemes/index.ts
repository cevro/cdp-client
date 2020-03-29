import {SignalTypeDefinition} from '@definitions/signals/interfaces';
import {TurnoutSchemeDefinition} from '@definitions/turnouts';
import {
    autoBlockPuLpM,
    AutoBlockSectorFrontEndDefinition,
} from './linePuLpM';
import {SectorDefinition, sectors} from '@definitions/sectors';
import {signals, turnouts} from "@app/schemes/zstPu";

export interface SignalSchemeDefinition extends SignalTypeDefinition {
    SVGData: {
        rotate: number;
        x: number;
        y: number;
    };
}

export interface SchemeItem {
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
        signals: SignalSchemeDefinition[];
        turnouts: TurnoutSchemeDefinition[];
        ABSectors: AutoBlockSectorFrontEndDefinition[];
        biDirAB: BiDirABDefinition[];
    };
    viewBox: string;
}

export interface frontEndScheme {
    [key: string]: SchemeItem;
}

export interface BiDirABDefinition {
    locoNetId: number;
    mainDir: 'L' | 'P';
    SVDData: {
        x: number;
        y: number;
    };
}


export const frontEndScheme: frontEndScheme = {
    'ab-PuLpM': autoBlockPuLpM,
    ZSTPu: {
        cards: {
            signals: true,
            sectors: true,
            ABSectors: true,
            points: true,
            routeBuilder: true,
            routes: true,
        },
        objects: {
            sectors: sectors,
            signals: signals,
            // @ts-ignore
            turnouts: turnouts,
            ABSectors: [],
            biDirAB: [],
        },
        viewBox: '-300 -90 2650 400',
    },
};

