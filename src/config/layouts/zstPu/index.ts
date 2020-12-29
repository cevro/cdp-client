import { getTurnoutDefinition, TurnoutSchemeDefinition } from 'app/consts/turnouts';
import { sectors } from 'app/consts/sectors';
import { LayoutDefinition } from 'app/config/layouts';
import { FrontendSignal } from 'app/middleware/fronendSignal';

const entrySignals: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.1L',
        SVGData: {rotate: 0, x: 0, y: 0},
    },
    {
        signalUId: 'zst.pu.a.2L',
        SVGData: {rotate: 0, x: 0, y: 30},
    },
    {
        signalUId: 'zst.pu.a.1S',
        SVGData: {rotate: 180, x: 1900, y: 210},
    },

    {
        signalUId: 'zst.pu.a.2S',
        SVGData: {rotate: 180, x: 1900, y: 240},
    },

    {
        signalUId: 'zst.pu.a.1BS',
        SVGData: {rotate: 180, x: 2000, y: 0},
    },

    {
        signalUId: 'zst.pu.a.2BS',
        SVGData: {rotate: 180, x: 2000, y: 30},
    },
];
const exitSignalsL: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.L1',
        SVGData: {rotate: 0, x: 1400, y: 0},
    },

    {
        signalUId: 'zst.pu.a.L2',
        SVGData: {rotate: 0, x: 1400, y: 30},
    },
    {
        signalUId: 'zst.pu.a.L3a',
        SVGData: {rotate: 0, x: 1550, y: -30},
    },

    {
        signalUId: 'zst.pu.a.L4',
        SVGData: {rotate: 0, x: 1475, y: 60},
    },

    {
        signalUId: 'zst.pu.a.L6',
        SVGData: {rotate: 0, x: 1475, y: 90},
    },

    {
        signalUId: 'zst.pu.a.L8',
        SVGData: {rotate: 0, x: 1425, y: 120},
    },

    {
        signalUId: 'zst.pu.a.L10',
        SVGData: {rotate: 0, x: 1375, y: 150},
    },

    {
        signalUId: 'zst.pu.a.L12',
        SVGData: {rotate: 0, x: 1325, y: 180},
    },

    {
        signalUId: 'zst.pu.a.L14a',
        SVGData: {rotate: 0, x: 1325, y: 210},
    },
];
const exitSignalsS: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.S1',
        SVGData: {rotate: 180, x: 500, y: 0},
    },

    {
        signalUId: 'zst.pu.a.S2',
        SVGData: {rotate: 180, x: 500, y: 30},
    },

    {
        signalUId: 'zst.pu.a.S3',
        SVGData: {rotate: 180, x: 475, y: -30},
    },

    {
        signalUId: 'zst.pu.a.S4',
        SVGData: {rotate: 180, x: 525, y: 60},
    },

    {
        signalUId: 'zst.pu.a.S6',
        SVGData: {rotate: 180, x: 625, y: 90},
    },

    {
        signalUId: 'zst.pu.a.S8',
        SVGData: {rotate: 180, x: 625, y: 120},
    },

    {
        signalUId: 'zst.pu.a.S10',
        SVGData: {rotate: 180, x: 625, y: 150},
    },

    {
        signalUId: 'zst.pu.a.S12',
        SVGData: {rotate: 180, x: 650, y: 180},
    },

    {
        signalUId: 'zst.pu.a.S14',
        SVGData: {rotate: 180, x: 750, y: 210},
    },

    {
        signalUId: 'zst.pu.a.S16',
        SVGData: {rotate: 180, x: 750, y: 240},
    },
];
const pathSignalsL: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.Lc3',
        SVGData: {rotate: 0, x: 975, y: -30},
    },
    {
        signalUId: 'zst.pu.a.Lc14',
        SVGData: {rotate: 0, x: 1125, y: 210},
    },

    {
        signalUId: 'zst.pu.a.Lc16',
        SVGData: {rotate: 0, x: 1075, y: 240},
    },
];
const pathSignalsS: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.Sc3a',
        SVGData: {rotate: 180, x: 1075, y: -30},
    },

    {
        signalUId: 'zst.pu.a.Sc14a',
        SVGData: {rotate: 180, x: 1225, y: 210},
    },
];
const shiftSignals: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.Se1',
        SVGData: {rotate: 180, x: 25, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se2',
        SVGData: {rotate: 180, x: 25, y: 30},
    },
    {
        signalUId: 'zst.pu.a.Se3',
        SVGData: {rotate: 0, x: 100, y: 60},
    },
    {
        signalUId: 'zst.pu.a.Se4',
        SVGData: {rotate: 0, x: 125, y: 30},
    },
    {
        signalUId: 'zst.pu.a.Se5',
        SVGData: {rotate: 0, x: 125, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se6',
        SVGData: {rotate: 0, x: 275, y: 60},
    },
    {
        signalUId: 'zst.pu.a.Se7',
        SVGData: {rotate: 0, x: 325, y: 30},
    },
    {
        signalUId: 'zst.pu.a.Se8',
        SVGData: {rotate: 0, x: 325, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se9',
        SVGData: {rotate: 0, x: 350, y: 60},
    },
    {
        signalUId: 'zst.pu.a.Se11',
        SVGData: {rotate: 180, x: 750, y: 270},
    },
    {
        signalUId: 'zst.pu.a.Se19',
        SVGData: {rotate: 0, x: 1075, y: 270},
    },
    {
        signalUId: 'zst.pu.a.Se20',
        SVGData: {rotate: 0, x: 975, y: -60},
    },
    {
        signalUId: 'zst.pu.a.Se102',
        SVGData: {rotate: 180, x: 1250, y: 240},
    },
    {
        signalUId: 'zst.pu.a.Se21',
        SVGData: {rotate: 180, x: 1550, y: 30},
    },
    {
        signalUId: 'zst.pu.a.Se22',
        SVGData: {rotate: 180, x: 1525, y: 120},
    },
    {
        signalUId: 'zst.pu.a.Se23',
        SVGData: {rotate: 180, x: 1600, y: 60},
    },
    {
        signalUId: 'zst.pu.a.Se24',
        SVGData: {rotate: 0, x: 1650, y: 60},
    },
    {
        signalUId: 'zst.pu.a.Se25',
        SVGData: {rotate: 0, x: 1650, y: 30},
    },
    {
        signalUId: 'zst.pu.a.Se26',
        SVGData: {rotate: 180, x: 1700, y: 90},
    },
    {
        signalUId: 'zst.pu.a.Se27',
        SVGData: {rotate: 180, x: 1700, y: 120},
    },
    {
        signalUId: 'zst.pu.a.Se29',
        SVGData: {rotate: 180, x: 1700, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se34',
        SVGData: {rotate: 0, x: 1850, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se35',
        SVGData: {rotate: 180, x: 1925, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se36',
        SVGData: {rotate: 180, x: 1925, y: 30},
    },
    {
        signalUId: 'zst.pu.a.Se37',
        SVGData: {rotate: 0, x: 1875, y: 210},
    },
    {
        signalUId: 'zst.pu.a.Se38',
        SVGData: {rotate: 0, x: 1875, y: 240},
    },
    {
        signalUId: 'zst.pu.a.Se39',
        SVGData: {rotate: 0, x: 1975, y: 0},
    },
    {
        signalUId: 'zst.pu.a.Se40',
        SVGData: {rotate: 0, x: 1975, y: 30},
    },

];

const signalAutoblokLM: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'ab.pu-lpm.1-15',
        SVGData: {rotate: 0, x: 2000, y: 210},
    },
    {
        signalUId: 'ab.pu-lpm.1-22',
        SVGData: {rotate: 180, x: 2100, y: 210},
    },
    {
        signalUId: 'ab.pu-lpm.2-15',
        SVGData: {rotate: 0, x: 2000, y: 240},
    },
    {
        signalUId: 'ab.pu-lpm.2-22',
        SVGData: {rotate: 180, x: 2100, y: 240},
    },
];
const signalAutoblokPB: FrontendSignal.LayoutDefinition[] = [
    {
        signalUId: 'zst.pu.a.1-1600',
        SVGData: {rotate: 180, x: -100, y: 0},
    },
    {
        signalUId: 'zst.pu.a.1-1603',
        SVGData: {rotate: 0, x: -200, y: 0},
    },
    {
        signalUId: 'zst.pu.a.2-1600',
        SVGData: {rotate: 180, x: -100, y: 30},
    },
    {
        signalUId: 'zst.pu.a.2-1603',
        SVGData: {rotate: 0, x: -200, y: 30},
    },
];

export const turnouts: TurnoutSchemeDefinition[] = [
    {
        ...getTurnoutDefinition('zst.pu.a.1'),
        SVGData: {x: 125, y: 60, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.2'),
        SVGData: {x: 150, y: 0, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.3'),
        SVGData: {x: 175, y: 30, rotate: 180, dir: 'L'},
    },

    {
        ...getTurnoutDefinition('zst.pu.a.4'),
        SVGData: {x: 200, y: 30, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.5'),
        SVGData: {x: 225, y: 30, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.6'),
        SVGData: {x: 275, y: 30, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.7'),
        SVGData: {x: 275, y: 0, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.8'),
        SVGData: {x: 325, y: 60, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.9'),
        SVGData: {x: 350, y: 0, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.10'),
        SVGData: {x: 375, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.11'),
        SVGData: {x: 400, y: 30, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.12'),
        SVGData: {x: 575, y: 180, rotate: 26.23, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.13'),
        SVGData: {x: 400, y: -30, rotate: -26.23, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.14a'),
        SVGData: {x: 450, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.14b'),
        SVGData: {x: 450, y: 60, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.15'),
        SVGData: {x: 500, y: 90, rotate: 26.23, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.16'),
        SVGData: {x: 625, y: 210, rotate: 26.23, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.17'),
        SVGData: {x: 550, y: 90, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.18'),
        SVGData: {x: 675, y: 210, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.21a'),
        SVGData: {x: 1150, y: 240, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.21b'),
        SVGData: {x: 1150, y: 240, rotate: 0, dir: 'L'},
    },

    {
        ...getTurnoutDefinition('zst.pu.a.22'),
        SVGData: {x: 1200, y: 210, rotate: 180, dir: 'L'},
    },

    {
        ...getTurnoutDefinition('zst.pu.a.23'),
        SVGData: {x: 1050, y: -30, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.24'),
        SVGData: {x: 1425, y: 0, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.25'),
        SVGData: {x: 1475, y: 30, rotate: 180, dir: 'P'},
    },

    {
        ...getTurnoutDefinition('zst.pu.a.26'),
        SVGData: {x: 1500, y: 30, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.27'),
        SVGData: {x: 1400, y: 180, rotate: 153.77, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.28'),

        SVGData: {x: 1450, y: 150, rotate: 153.77, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.29a'),
        SVGData: {x: 1550, y: 60, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.29b'),
        SVGData: {x: 1550, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.30'),
        SVGData: {x: 1500, y: 120, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.31'),
        SVGData: {x: 1600, y: 120, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.32a'),
        SVGData: {x: 1600, y: 90, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.32b'),
        SVGData: {x: 1600, y: 90, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.33'),
        SVGData: {x: 1625, y: 0, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.34a'),
        SVGData: {x: 1650, y: 90, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.34b'),
        SVGData: {x: 1650, y: 90, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.35a'),
        SVGData: {x: 1650, y: 120, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.35b'),
        SVGData: {x: 1650, y: 120, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.36'),
        SVGData: {x: 1650, y: 0, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.37'),
        SVGData: {x: 1700, y: 60, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.38'),
        SVGData: {x: 1750, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.40'),
        SVGData: {x: 1775, y: 60, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.41'),
        SVGData: {x: 1700, y: 30, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.42'),
        SVGData: {x: 1825, y: 30, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.43'),
        SVGData: {x: 1850, y: 30, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.a.44'),
        SVGData: {x: 1900, y: 0, rotate: 180, dir: 'L'},
    },
];

export const layout: LayoutDefinition = {
    name: 'Púchov',
    id: 'pu',
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
        signals: [
            ...entrySignals,
            ...exitSignalsL,
            ...exitSignalsS,
            ...pathSignalsL,
            ...pathSignalsS,
            ...shiftSignals,
            ...signalAutoblokLM,
            ...signalAutoblokPB,
        ],
        // @ts-ignore
        turnouts: turnouts,
        ABSectors: [],
        biDirAB: [],
    },
    viewBox: '-300 -90 2650 400',
};
