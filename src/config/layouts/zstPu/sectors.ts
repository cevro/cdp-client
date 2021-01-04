import { FrontendSector } from 'app/middleware/frontendSecotr';

const rail5: FrontendSector.LayoutDefinition[] = [];
const rail3: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.3LK_0',
        SVGData: {points: ['375,-15 450,-60 550,-60', '400,-30 475,-30']},
    },
    {
        sectorUId: 'zst.pu.s.3',
        SVGData: {
            points: ['475,-30 975,-30'],
            label: {
                x: 725,
                y: -30,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.3C',
        SVGData: {points: ['975,-30 1075,-30', '975,-60 1000,-60 1050,-30']},
    },
    {
        sectorUId: 'zst.pu.s.3a',


        SVGData: {
            points: ['1075,-30 1550,-30'],
            label: {
                x: 1250,
                y: -30,
            },
        },
    },
];
const rail1: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.1LK_0',

        SVGData: {points: ['0,0 125,0']},
    },
    {
        sectorUId: 'zst.pu.s.1LK_1',

        SVGData: {points: ['125,0 212.5,0', '150,0 175,15']},
    },
    {
        sectorUId: 'zst.pu.s.1LK_2',

        SVGData: {points: ['212.5,0 325,0', '275,0 250,15']},
    },
    {
        sectorUId: 'zst.pu.s.1LK_3',

        SVGData: {points: ['325,0 500,0', '350,0 375,-15']},
    },
    {
        sectorUId: 'zst.pu.s.1',

        SVGData: {
            points: ['500,0 1400,0'],
            label: {
                x: 950,
                y: 0,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.1BS_0',

        SVGData: {
            points: ['1400,0 1550,0', '1425,0 1450,15'],
        },
    },
    {
        sectorUId: 'zst.pu.s.1BS_1',

        SVGData: {points: ['1550,0 1700,0', '1550,-30 1575,-30 1625,0', '1650,0 1675,15']},
    },
    {
        sectorUId: 'zst.pu.s.1BS_2',

        SVGData: {points: ['1700,0 1850,0']},
    },
    {
        sectorUId: 'zst.pu.s.1BS_3',

        SVGData: {points: ['1850,0 1925,0', '1900,0 1875,15']},
    },
    {
        sectorUId: 'zst.pu.s.1BS_4',

        SVGData: {points: ['1925,0 2000,0']},
    },
];
const rail2: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.2LK_0',

        SVGData: {points: ['0,30 125,30']},
    },

    {
        sectorUId: 'zst.pu.s.2LK_1',

        SVGData: {points: ['125,30 212.5,30', '200,30 175,15', '150,45 175,30']},
    },

    {
        sectorUId: 'zst.pu.s.2LK_2',

        SVGData: {points: ['212.5,30 325,30', '225,30 250,15', '275,30 300,45']},
    },

    {
        sectorUId: 'zst.pu.s.2LK_3',

        SVGData: {points: ['325,30 500,30', '400,30 425,45']},
    },

    {
        sectorUId: 'zst.pu.s.2',

        SVGData: {
            points: ['500,30 1400,30'],
            label: {
                x: 950,
                y: 30,
            },
        },
    },

    {
        sectorUId: 'zst.pu.s.2BS_0',

        SVGData: {points: ['1400,30 1550,30', '1450,15 1475,30', '1500,30 1525,45']},
    },

    {
        sectorUId: 'zst.pu.s.2BS_1',

        SVGData: {points: ['1550,30 1650,30']},
    },

    {
        sectorUId: 'zst.pu.s.2BS_2',

        SVGData: {points: ['1650,30 1925,30', '1875,15 1850,30', '1675,15 1700,30', '1800,45 1825,30']},
    },
    {
        sectorUId: 'zst.pu.s.2BS_3',

        SVGData: {points: ['1925,30 2000,30']},
    },
];
const rail4: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.4LK_0',

        SVGData: {points: ['100,60 275,60', '125,60 150,45']},
    },
    {
        sectorUId: 'zst.pu.s.4LK_1',

        SVGData: {points: ['275,60 350,60', '300,45 325,60']},
    },
    {
        sectorUId: 'zst.pu.s.4LK_2',

        SVGData: {
            points: [
                '350,60 425,60',
                '375,60 400,75',
            ],
        },
    },
    {
        sectorUId: 'zst.pu.s.4LK_3',

        SVGData: {
            points: [
                '425,60 525,60',
                '425,45 475,75',
            ],
        },
    },
    {
        sectorUId: 'zst.pu.s.4',

        SVGData: {
            points: ['525,60 1475,60'],
            label: {
                x: 950,
                y: 60,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.4BSK_0',

        SVGData: {
            points: [
                '1475,60 1600,60',
                '1525,45 1575,75',
            ],
        },
    },
    {
        sectorUId: 'zst.pu.s.4BSK_1',

        SVGData: {
            points: ['1600,60 1650,60'],
        },
    },
    {
        sectorUId: 'zst.pu.s.4BSK_2',

        SVGData: {
            points: ['1650,60 1725,60', '1675,75 1700,60'],
        },
    },
    {
        sectorUId: 'zst.pu.s.4BSK_3',

        SVGData: {
            points: ['1725,60 1850,60', '1750,60 1775,75', '1775,60 1800,45'],
        },
    },
];
const rail6: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.6LK',

        SVGData: {points: ['525,90 625,90', '550,90 600,120 625,120']},
    },
    {
        sectorUId: 'zst.pu.s.6',

        SVGData: {
            points: ['625,90 1475,90'],
            label: {
                x: 950,
                y: 90,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.1SK_0',

        SVGData: {points: ['1475,90 1550,90']},
    },
    {
        sectorUId: 'zst.pu.s.1SK_1',

        SVGData: {
            points: [
                '1550,90 1700,90',
                '1635,99 1675,75 ',
                '1575,75 1615,99',
            ],
        },
    },
    {
        sectorUId: 'zst.pu.s.1SK',

        SVGData: {points: ['1700,90 1725,90 1850,210 1900,210']},
    },
];
const rail8: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.8',

        SVGData: {
            points: ['625,120 1425,120'],
            label: {
                x: 950,
                y: 120,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.2SK_0',

        SVGData: {
            points: [
                '1425,120 1525,120',
                '1425,165 1500,120',
                '1375,150 1450,150',
            ],
        },
    },
    {
        sectorUId: 'zst.pu.s.2SK_1',

        SVGData: {
            points: [
                '1525,120 1700,120',
                '1600,120 1635,99',
                '1615,99 1675,135',
            ],
        },
    },
    {
        sectorUId: 'zst.pu.s.2SK',

        SVGData: {points: ['1700,120 1725,120 1850,240 1900,240']},
    },
];
const rail10: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.10LK',

        SVGData: {points: ['475,75 600,150 625,150', '500,90 525,90']},
    },
    {
        sectorUId: 'zst.pu.s.10',

        SVGData: {
            points: ['625,150 1375,150'],
            label: {
                x: 950,
                y: 150,
            },
        },
    },
];
const rail12: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.12LK',

        SVGData: {points: ['400,75 600,195', '575,180 650,180']},
    },
    {
        sectorUId: 'zst.pu.s.12',

        SVGData: {
            points: ['650,180 1325,180'],
            label: {
                x: 950,
                y: 180,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.12SK_1',

        SVGData: {
            points: [
                '1425,165 1350,210 1325,210',
                '1325,180 1400,180',
            ],
        },
    },
];
const rail14: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.14LK',

        SVGData: {points: ['650,210 750,210', '675,210 725,240 750,240']},
    },
    {
        sectorUId: 'zst.pu.s.14',

        SVGData: {
            points: ['750,210 1125,210'],
            label: {
                x: 900,
                y: 210,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.14a',

        SVGData: {
            points: ['1225,210 1325,210'],
            label: {
                x: 1275,
                y: 210,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.14C',

        SVGData: {points: ['1125,210 1225,210', '1200,210 1175,225']},
    },
];
const rail16: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.16',

        SVGData: {
            points: ['750,240 1075,240'],
            label: {
                x: 900,
                y: 240,
            },
        },
    },
    {
        sectorUId: 'zst.pu.s.16C',

        SVGData: {points: ['1075,240 1250,240', '1175,225 1100,270 1075,270']},
    },
];
const rail18: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.18LK',

        SVGData: {points: ['600,195 725,270 750,270', '625,210 650,210']},
    },
];
const railLT: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.1LT-I',

        SVGData: {points: ['-100,0 0,0']},
    },
    {
        sectorUId: 'zst.pu.s.1LT-II',

        SVGData: {points: ['-200,0 -100,0']},
    },
    {
        sectorUId: 'zst.pu.s.1LT-III',

        SVGData: {points: ['-250,0 -200,0']},
    },
    {
        sectorUId: 'zst.pu.s.2LT-I',

        SVGData: {points: ['-100,30 0,30']},
    },
    {
        sectorUId: 'zst.pu.s.2LT-II',

        SVGData: {points: ['-200,30 -100,30']},
    },
    {
        sectorUId: 'zst.pu.s.2LT-III',

        SVGData: {points: ['-250,30 -200,30']},
    },
];
const railST: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu-lpm.s.1ST-1',

        SVGData: {points: ['1900,210 2000,210']},
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-2',

        SVGData: {points: ['2000,210 2100,210']},
    },
    {
        sectorUId: 'zst.pu-lpm.s.1ST-3',

        SVGData: {points: ['2100,210 2150,210']},
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-1',

        SVGData: {points: ['1900,240 2000,240']},
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-2',

        SVGData: {points: ['2000,240 2100,240']},
    },
    {
        sectorUId: 'zst.pu-lpm.s.2ST-3',

        SVGData: {points: ['2100,240 2150,240']},
    },
];
const railK: FrontendSector.LayoutDefinition[] = [
    {
        sectorUId: 'zst.pu.s.1K',

        SVGData: {points: ['2000,0 2075,0']},
    },
    {
        sectorUId: 'zst.pu.s.3K',

        SVGData: {points: ['2075,0 2200,0']},
    },
    {
        sectorUId: 'zst.pu.s.5L',

        SVGData: {points: ['2200,0 2250,0']},
    },
    {
        sectorUId: 'zst.pu.s.',

        SVGData: {points: ['2250,0 2300,0']},
    },
    {
        sectorUId: 'zst.pu.s.4K',

        SVGData: {points: ['2000,30 2125,30']},
    },
    {
        sectorUId: 'zst.pu.s.6K',

        SVGData: {points: ['2125,30 2200,30']},
    },
    {
        sectorUId: 'zst.pu.s.8K',

        SVGData: {points: ['2200,30 2250,30']},
    },
    {
        sectorUId: 'zst.pu.s.',

        SVGData: {points: ['2250,30 2300,30']},
    },
];

export const sectors: FrontendSector.LayoutDefinition[] = [
    ...rail5,
    ...rail3,
    ...rail1,
    ...rail2,
    ...rail4,
    ...rail6,
    ...rail8,
    ...rail10,
    ...rail12,
    ...rail14,
    ...rail16,
    ...rail18,
    ...railLT,
    ...railST,
    ...railK,
];
