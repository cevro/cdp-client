import { ABSectors, AutoBlockSectorDefinition } from 'app/consts/ABSectors/ABSectors';
import { signals } from 'app/config/layouts/linePuLpM/signals';
import { LayoutDefinition } from 'app/config/layouts';
import { FrontendSector } from 'app/middleware/frontendSecotr';

export type AutoBlockSectorFrontEndDefinition = AutoBlockSectorDefinition;

const sectors1: FrontendSector.LayoutDefinition[] = [
    {
        name: '',
        id: 101,
        SVGData: {
            points: ['100,0 200,0'],
        },
    },
    {
        name: '',
        id: 103,
        SVGData: {
            points: ['200,0 250,0'],
        },
    },
    {
        name: '',
        id: 105,
        SVGData: {
            points: ['250,0 350,0'],
        },
    },
    {
        name: '',
        id: 107,
        SVGData: {
            points: ['350,0 400,0'],
        },
    },
    {
        name: '',
        id: 109,
        SVGData: {
            points: ['400,0 500,0'],
        },
    },
    {
        name: '',
        id: 111,
        SVGData: {
            points: ['500,0 550,0'],
        },
    },
    {
        name: '',
        id: 113,
        SVGData: {
            points: ['550,0 600,0'],
        },
    },
    {
        name: '',
        id: 115,
        SVGData: {
            points: ['600,0 750,0'],
        },
    },
    {
        name: '',
        id: 117,
        SVGData: {
            points: ['750,0 800,0'],
        },
    },
    {
        name: '',
        id: 119,
        SVGData: {
            points: ['800,0 900,0'],
        },
    },
    {
        name: '',
        id: 121,
        SVGData: {
            points: ['900,0 1050,0'],
        },
    },
    {
        name: '',
        id: 123,
        SVGData: {
            points: ['1050,0 1100,0'],
        },
    },
    {
        name: '',
        id: 125,
        SVGData: {
            points: ['1100,0 1200,0'],
        },
    },
    {
        name: '',
        id: 127,
        SVGData: {
            points: ['1200,0 1400,0'],
        },
    },
    {
        name: '',
        id: 129,
        SVGData: {
            points: ['1350,0 1500,0'],
        },
    },
];

const sectors2: FrontendSector.LayoutDefinition[] = [
    {
        name: '',
        id: 102,
        SVGData: {
            points: ['100,30 200,30'],
        },
    },
    {
        name: '',
        id: 104,
        SVGData: {
            points: ['200,30 250,30'],
        },
    },
    {
        name: '',
        id: 106,
        SVGData: {
            points: ['250,30 350,30'],
        },
    },
    {
        name: '',
        id: 108,
        SVGData: {
            points: ['350,30 400,30'],
        },
    },
    {
        name: '',
        id: 110,
        SVGData: {
            points: ['400,30 500,30'],
        },
    },
    {
        name: '',
        id: 112,
        SVGData: {
            points: ['500,30 550,30'],
        },
    },
    {
        name: '',
        id: 114,
        SVGData: {
            points: ['550,30 600,30'],
        },
    },
    {
        name: '',
        id: 116,
        SVGData: {
            points: ['600,30 750,30'],
        },
    },
    {
        name: '',
        id: 118,
        SVGData: {
            points: ['750,30 800,30'],
        },
    },
    {
        name: '',
        id: 120,
        SVGData: {
            points: ['800,30 900,30'],
        },
    },
    {
        name: '',
        id: 122,
        SVGData: {
            points: ['900,30 1050,30'],
        },
    },
    {
        name: '',
        id: 124,
        SVGData: {
            points: ['1050,30 1100,30'],
        },
    },
    {
        name: '',
        id: 126,
        SVGData: {
            points: ['1100,30 1200,30'],
        },
    },
    {
        name: '',
        id: 128,
        SVGData: {
            points: ['1200,30 1400,30'],
        },
    },
    {
        name: '',
        id: 130,
        SVGData: {
            points: ['1350,30 1500,30'],
        },
    },
];

export const layout: LayoutDefinition = {
    name: 'Pu - LpM',
    id: 'pu-lpm',
    cards: {
        signals: true,
        sectors: true,
        ABSectors: true,
        points: false,
        routeBuilder: false,
        routes: false,
    },
    objects: {
        sectors: [
            ...sectors1,
            ...sectors2,
        ],
        signals: signals,
        turnouts: [],
        ABSectors: ABSectors,
        biDirAB: [
            {
                locoNetId: 451,
                mainDir: 'L',
                SVDData: {
                    x: 750,
                    y: -30,
                },
            },
            {
                locoNetId: 450,
                mainDir: 'P',
                SVDData: {
                    x: 750,
                    y: 60,
                },
            },
        ],
    },
    viewBox: '0 -60 1600 150',
};
