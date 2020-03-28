"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@definitions/entity");
function getObjectState(accessKey, store, locoNetId) {
    const objects = store.objectState[accessKey];
    let state = undefined;
    for (const id in objects) {
        if (objects.hasOwnProperty(id)) {
            if (+id === locoNetId) {
                state = objects[id];
            }
        }
    }
    return state;
}
exports.getSignalState = (store, signalId) => {
    return getObjectState(entity_1.ENTITY_SIGNAL, store, signalId);
};
exports.getSectorState = (store, sectorId) => {
    return getObjectState(entity_1.ENTITY_SECTOR, store, sectorId);
};
exports.getTurnoutState = (store, pointId) => {
    return getObjectState(entity_1.ENTITY_TURNOUT, store, pointId);
};
exports.getABSectorState = (store, sectorId) => {
    return getObjectState(entity_1.ENTITY_AB_SECTOR, store, sectorId);
};
exports.getBiDirABState = (store, ABId) => {
    return getObjectState(entity_1.ENTITY_BI_DIR_AB, store, ABId);
};
