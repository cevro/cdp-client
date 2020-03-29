import {SignalSchemeDefinition} from "@app/schemes";
import {getSignalDefinition} from "@app/consts/signals/";
import {getTurnoutDefinition, TurnoutSchemeDefinition} from "@app/consts/turnouts";
import {TurnoutState} from "@app/consts/interfaces";

const entrySignals: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.1L'),
        SVGData: {rotate: 0, x: 0, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.2L'),
        SVGData: {rotate: 0, x: 0, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.1S'),
        SVGData: {rotate: 180, x: 1900, y: 210},
    },

    {
        ...getSignalDefinition('zst.pu.2S'),
        SVGData: {rotate: 180, x: 1900, y: 240},
    },

    {
        ...getSignalDefinition('zst.pu.1BS'),
        SVGData: {rotate: 180, x: 2000, y: 0},
    },

    {
        ...getSignalDefinition('zst.pu.2BS'),
        SVGData: {rotate: 180, x: 2000, y: 30},
    },
];
const exitSignalsL: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.L1'),
        SVGData: {rotate: 0, x: 1400, y: 0},
    },

    {
        ...getSignalDefinition('zst.pu.L2'),
        SVGData: {rotate: 0, x: 1400, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.L3a'),
        SVGData: {rotate: 0, x: 1550, y: -30},
    },

    {
        ...getSignalDefinition('zst.pu.L4'),
        SVGData: {rotate: 0, x: 1475, y: 60},
    },

    {
        ...getSignalDefinition('zst.pu.L6'),
        SVGData: {rotate: 0, x: 1475, y: 90},
    },

    {
        ...getSignalDefinition('zst.pu.L8'),
        SVGData: {rotate: 0, x: 1425, y: 120},
    },

    {
        ...getSignalDefinition('zst.pu.L10'),
        SVGData: {rotate: 0, x: 1375, y: 150},
    },

    {
        ...getSignalDefinition('zst.pu.L12'),
        SVGData: {rotate: 0, x: 1325, y: 180},
    },

    {
        ...getSignalDefinition('zst.pu.L14a'),
        SVGData: {rotate: 0, x: 1325, y: 210},
    },
];
const exitSignalsS: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.S1'),
        SVGData: {rotate: 180, x: 500, y: 0},
    },

    {
        ...getSignalDefinition('zst.pu.S2'),
        SVGData: {rotate: 180, x: 500, y: 30},
    },

    {
        ...getSignalDefinition('zst.pu.S3'),
        SVGData: {rotate: 180, x: 475, y: -30},
    },

    {
        ...getSignalDefinition('zst.pu.S4'),
        SVGData: {rotate: 180, x: 525, y: 60},
    },

    {
        ...getSignalDefinition('zst.pu.S6'),
        SVGData: {rotate: 180, x: 625, y: 90},
    },

    {
        ...getSignalDefinition('zst.pu.S8'),
        SVGData: {rotate: 180, x: 625, y: 120},
    },

    {
        ...getSignalDefinition('zst.pu.S10'),
        SVGData: {rotate: 180, x: 625, y: 150},
    },

    {
        ...getSignalDefinition('zst.pu.S12'),
        SVGData: {rotate: 180, x: 650, y: 180},
    },

    {
        ...getSignalDefinition('zst.pu.S14'),
        SVGData: {rotate: 180, x: 750, y: 210},
    },

    {
        ...getSignalDefinition('zst.pu.S16'),
        SVGData: {rotate: 180, x: 750, y: 240},
    },
];
const pathSignalsL: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.Lc3'),
        SVGData: {rotate: 0, x: 975, y: -30},
    },
    {
        ...getSignalDefinition('zst.pu.Lc14'),
        SVGData: {rotate: 0, x: 1125, y: 210},
    },

    {
        ...getSignalDefinition('zst.pu.Lc16'),
        SVGData: {rotate: 0, x: 1075, y: 240},
    },
];
const pathSignalsS: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.Sc3a'),
        SVGData: {rotate: 180, x: 1075, y: -30},
    },

    {
        ...getSignalDefinition('zst.pu.Sc14a'),
        SVGData: {rotate: 180, x: 1225, y: 210},
    },
];
const shiftSignals: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.Se1'),
        SVGData: {rotate: 180, x: 25, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se2'),
        SVGData: {rotate: 180, x: 25, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.Se3'),
        SVGData: {rotate: 0, x: 100, y: 60},
    },
    {
        ...getSignalDefinition('zst.pu.Se4'),
        SVGData: {rotate: 0, x: 125, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.Se5'),
        SVGData: {rotate: 0, x: 125, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se6'),
        SVGData: {rotate: 0, x: 275, y: 60},
    },
    {
        ...getSignalDefinition('zst.pu.Se7'),
        SVGData: {rotate: 0, x: 325, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.Se8'),
        SVGData: {rotate: 0, x: 325, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se9'),
        SVGData: {rotate: 0, x: 350, y: 60},
    },
    {
        ...getSignalDefinition('zst.pu.Se11'),
        SVGData: {rotate: 180, x: 750, y: 270},
    },
    {
        ...getSignalDefinition('zst.pu.Se19'),
        SVGData: {rotate: 0, x: 1075, y: 270},
    },
    {
        ...getSignalDefinition('zst.pu.Se20'),
        SVGData: {rotate: 0, x: 975, y: -60},
    },
    {
        ...getSignalDefinition('zst.pu.Se102'),
        SVGData: {rotate: 180, x: 1250, y: 240},
    },
    {
        ...getSignalDefinition('zst.pu.Se21'),
        SVGData: {rotate: 180, x: 1550, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.Se22'),
        SVGData: {rotate: 180, x: 1525, y: 120},
    },
    {
        ...getSignalDefinition('zst.pu.Se23'),
        SVGData: {rotate: 180, x: 1600, y: 60},
    },
    {
        ...getSignalDefinition('zst.pu.Se24'),
        SVGData: {rotate: 0, x: 1650, y: 60},
    },
    {
        ...getSignalDefinition('zst.pu.Se25'),
        SVGData: {rotate: 0, x: 1650, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.Se26'),
        SVGData: {rotate: 180, x: 1700, y: 90},
    },
    {
        ...getSignalDefinition('zst.pu.Se27'),
        SVGData: {rotate: 180, x: 1700, y: 120},
    },
    {
        ...getSignalDefinition('zst.pu.Se29'),
        SVGData: {rotate: 180, x: 1700, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se34'),
        SVGData: {rotate: 0, x: 1850, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se35'),
        SVGData: {rotate: 180, x: 1925, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se36'),
        SVGData: {rotate: 180, x: 1925, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.Se37'),
        SVGData: {rotate: 0, x: 1875, y: 210},
    },
    {
        ...getSignalDefinition('zst.pu.Se38'),
        SVGData: {rotate: 0, x: 1875, y: 240},
    },
    {
        ...getSignalDefinition('zst.pu.Se39'),
        SVGData: {rotate: 0, x: 1975, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.Se40'),
        SVGData: {rotate: 0, x: 1975, y: 30},
    },

];

const signalAutoblokLM: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('ab.pu-lpm.1-15'),
        SVGData: {rotate: 0, x: 2000, y: 210},
    },
    {
        ...getSignalDefinition('ab.pu-lpm.1-22'),
        SVGData: {rotate: 180, x: 2100, y: 210},
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-15'),
        SVGData: {rotate: 0, x: 2000, y: 240},
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-22'),
        SVGData: {rotate: 180, x: 2100, y: 240},
    },
];
const signalAutoblokPB: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('zst.pu.1-1600'),
        SVGData: {rotate: 180, x: -100, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.1-1603'),
        SVGData: {rotate: 0, x: -200, y: 0},
    },
    {
        ...getSignalDefinition('zst.pu.2-1600'),
        SVGData: {rotate: 180, x: -100, y: 30},
    },
    {
        ...getSignalDefinition('zst.pu.2-1603'),
        SVGData: {rotate: 0, x: -200, y: 30},
    },
];

export const turnouts: TurnoutSchemeDefinition[] = [
    {
        ...getTurnoutDefinition('zst.pu.1'),
        SVGData: {x: 125, y: 60, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.2'),
        SVGData: {x: 150, y: 0, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.3'),
        SVGData: {x: 175, y: 30, rotate: 180, dir: 'L'},
    },

    {
        ...getTurnoutDefinition('zst.pu.4'),
        SVGData: {x: 200, y: 30, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.5'),
        SVGData: {x: 225, y: 30, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.6'),
        SVGData: {x: 275, y: 30, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.7'),
        SVGData: {x: 275, y: 0, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.8'),
        SVGData: {x: 325, y: 60, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.9'),
        SVGData: {x: 350, y: 0, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.10'),
        SVGData: {x: 375, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.11'),
        SVGData: {x: 400, y: 30, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.12'),
        SVGData: {x: 575, y: 180, rotate: 26.23, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.13'),
        SVGData: {x: 400, y: -30, rotate: -26.23, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.14a'),
        SVGData: {x: 450, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.14b'),
        SVGData: {x: 450, y: 60, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.15'),
        SVGData: {x: 500, y: 90, rotate: 26.23, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.16'),
        SVGData: {x: 625, y: 210, rotate: 26.23, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.17'),
        SVGData: {x: 550, y: 90, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.18'),
        SVGData: {x: 675, y: 210, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.21a'),
        SVGData: {x: 1150, y: 240, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.21b'),
        SVGData: {x: 1150, y: 240, rotate: 0, dir: 'L'},
    },

    {
        ...getTurnoutDefinition('zst.pu.22'),
        SVGData: {x: 1200, y: 210, rotate: 180, dir: 'L'},
    },

    {
        ...getTurnoutDefinition('zst.pu.23'),
        SVGData: {x: 1050, y: -30, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.24'),
        SVGData: {x: 1425, y: 0, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.25'),
        SVGData: {x: 1475, y: 30, rotate: 180, dir: 'P'},
    },

    {
        ...getTurnoutDefinition('zst.pu.26'),
        SVGData: {x: 1500, y: 30, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.27'),
        SVGData: {x: 1400, y: 180, rotate: 153.77, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.28'),

        SVGData: {x: 1450, y: 150, rotate: 153.77, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.29a'),
        SVGData: {x: 1550, y: 60, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.29b'),
        SVGData: {x: 1550, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.30'),
        SVGData: {x: 1500, y: 120, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.31'),
        SVGData: {x: 1600, y: 120, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.32a'),
        SVGData: {x: 1600, y: 90, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.32b'),
        SVGData: {x: 1600, y: 90, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.33'),
        SVGData: {x: 1625, y: 0, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.34a'),
        SVGData: {x: 1650, y: 90, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.34b'),
        SVGData: {x: 1650, y: 90, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.35a'),
        SVGData: {x: 1650, y: 120, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.35b'),
        SVGData: {x: 1650, y: 120, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.36'),
        SVGData: {x: 1650, y: 0, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.37'),
        SVGData: {x: 1700, y: 60, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.38'),
        SVGData: {x: 1750, y: 60, rotate: 0, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.40'),
        SVGData: {x: 1775, y: 60, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.41'),
        SVGData: {x: 1700, y: 30, rotate: 180, dir: 'P'},
    },
    {
        ...getTurnoutDefinition('zst.pu.42'),
        SVGData: {x: 1825, y: 30, rotate: 180, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.43'),
        SVGData: {x: 1850, y: 30, rotate: 0, dir: 'L'},
    },
    {
        ...getTurnoutDefinition('zst.pu.44'),
        SVGData: {x: 1900, y: 0, rotate: 180, dir: 'L'},
    },
];

export const signals: SignalSchemeDefinition[] = [
    ...entrySignals,
    ...exitSignalsL,
    ...exitSignalsS,
    ...pathSignalsL,
    ...pathSignalsS,
    ...shiftSignals,
    ...signalAutoblokLM,
    ...signalAutoblokPB,
];