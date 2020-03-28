import {signalTypes} from "@app/consts/signals/signalTypes";
import {SignalBuffer} from "@app/consts/signals/interfaces";

const exitSignalsL: SignalBuffer = {
    'zst.pu.L1': {
        name: 'L1',
        locoNetId: 3,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L2': {
        name: 'L2',
        locoNetId: 4,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    'zst.pu.L3a': {
        name: 'L3a',
        locoNetId: 5,
        type: signalTypes.TYPE_EXIT,

        lights: ['Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L4': {
        name: 'L4',
        locoNetId: 6,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L6': {
        name: 'L6',
        locoNetId: 7,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L8': {
        name: 'L8',
        locoNetId: 8,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L10': {
        name: 'L10',
        locoNetId: 9,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L12': {
        name: 'L12',
        locoNetId: 10,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.L14a': {
        name: 'L14a',
        locoNetId: 11,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
};
const exitSignalsS: SignalBuffer = {
    'zst.pu.S1': {
        name: 'S1',
        locoNetId: 26,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S2': {
        name: 'S2',
        locoNetId: 27,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S3': {
        name: 'S3',
        locoNetId: 28,
        type: signalTypes.TYPE_EXIT,

        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S4': {
        name: 'S4',
        locoNetId: 29,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S6': {
        name: 'S6',
        locoNetId: 30,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S8': {
        name: 'S8',
        locoNetId: 31,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S10': {
        name: 'S10',
        locoNetId: 32,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S12': {
        name: 'S12',
        locoNetId: 33,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S14': {
        name: 'S14',
        locoNetId: 34,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    'zst.pu.S16': {
        name: 'S16',
        locoNetId: 35,
        type: signalTypes.TYPE_EXIT,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
};

export default {...exitSignalsL, exitSignalsS};