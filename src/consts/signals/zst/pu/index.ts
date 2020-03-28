import entrySignals from "@app/consts/signals/zst/pu/entry";
import exitSignals from "@app/consts/signals/zst/pu/entry";
import pathSignals from '@app/consts/signals/zst/pu/entry';
import shuntSignals from "@app/consts/signals/zst/pu/shunt";
export default {
    ...entrySignals,
    ...exitSignals,
    ...pathSignals,
    ...shuntSignals,
};