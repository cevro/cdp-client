import { signals } from 'app/config/layouts/linePuLpM/signals';
import { LayoutDefinition } from 'app/config/layouts';
import { FrontendSector } from 'app/middleware/frontendSecotr';

export type AutoBlockSectorFrontEndDefinition = any;

const sectors1: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu-lpm.s.1ST-1',
        SVGData: {
            points: ['100,0 200,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-2',
        SVGData: {
            points: ['200,0 250,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-3',
        SVGData: {
            points: ['250,0 350,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-4',
        SVGData: {
            points: ['350,0 400,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-5',
        SVGData: {
            points: ['400,0 500,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-6',
        SVGData: {
            points: ['500,0 550,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-7',
        SVGData: {
            points: ['550,0 600,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-8',
        SVGData: {
            points: ['600,0 750,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-9',
        SVGData: {
            points: ['750,0 800,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-10',
        SVGData: {
            points: ['800,0 900,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-11',
        SVGData: {
            points: ['900,0 1050,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-12',
        SVGData: {
            points: ['1050,0 1100,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-13',
        SVGData: {
            points: ['1100,0 1200,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-14',
        SVGData: {
            points: ['1200,0 1400,0'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-15',
        SVGData: {
            points: ['1350,0 1500,0'],
        },
    },
];

const sectors2: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu-lpm.s.2ST-1',
        SVGData: {
            points: ['100,30 200,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-2',
        SVGData: {
            points: ['200,30 250,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-3',
        SVGData: {
            points: ['250,30 350,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-4',
        SVGData: {
            points: ['350,30 400,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-5',
        SVGData: {
            points: ['400,30 500,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-6',
        SVGData: {
            points: ['500,30 550,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-7',
        SVGData: {
            points: ['550,30 600,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-8',
        SVGData: {
            points: ['600,30 750,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-9',
        SVGData: {
            points: ['750,30 800,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-10',
        SVGData: {
            points: ['800,30 900,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-11',
        SVGData: {
            points: ['900,30 1050,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-12',
        SVGData: {
            points: ['1050,30 1100,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-13',
        SVGData: {
            points: ['1100,30 1200,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-14',
        SVGData: {
            points: ['1200,30 1400,30'],
        },
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-15',
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
        turnouts: false,
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
        ABSectors: [],
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
