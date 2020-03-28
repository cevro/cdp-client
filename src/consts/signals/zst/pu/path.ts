import {signalTypes} from "@app/consts/signals/signalTypes";
import {SignalBuffer} from "@app/consts/signals/interfaces";

const pathSignalsL: SignalBuffer = {
    'zst.pu.Lc3': {
        name: 'Lc3',
        locoNetId: 106,
        type: signalTypes.TYPE_PATH,

        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
    'zst.pu.Lc14': {
        name: 'Lc14',
        locoNetId: 12,
        type: signalTypes.TYPE_PATH,

        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    'zst.pu.Lc16': {
        name: 'Lc16',
        locoNetId: 13,
        type: signalTypes.TYPE_PATH,

        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
};

const pathSignalsS: SignalBuffer = {
    'zst.pu.Sc3a': {
        name: 'Sc3a',
        locoNetId: 24,
        type: signalTypes.TYPE_PATH,

        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    'zst.pu.Sc14a': {
        name: 'Sc14a',
        locoNetId: 25,
        type: signalTypes.TYPE_PATH,

        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
};

export default {...pathSignalsL, pathSignalsS};