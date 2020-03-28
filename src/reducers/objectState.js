"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webSocets_1 = require("../actions/webSocets");
const entity_1 = require("@definitions/entity");
const messageRetrieve = (store, action) => {
    const { uri, method } = action.message;
    if (method === 'patch') {
        switch (action.message.uri) {
            case '/':
                return dumpRetrieve(store, action);
        }
        const match = uri.match(/([a-zA-Z_]+)\/([0-9]+)/);
        return objectRetrieve(+match[2], match[1], store, action);
    }
    return store;
};
const dumpRetrieve = (store, action) => {
    const { data } = action.message;
    [entity_1.ENTITY_SECTOR, entity_1.ENTITY_SIGNAL, entity_1.ENTITY_TURNOUT, entity_1.ENTITY_AB_SECTOR, entity_1.ENTITY_BI_DIR_AB].forEach((entityName) => {
        const storeData = {};
        data[entityName].forEach((value) => {
            storeData[value.locoNetId] = value;
        });
        store = Object.assign(Object.assign({}, store), { [entityName]: storeData });
    });
    return store;
    /* const sectorsData = {};
     data[ENTITY_SECTOR].forEach((sector) => {
         sectorsData[sector.locoNetId] = sector;
     });

     const signalsData: SignalsState = {};
     data[ENTITY_SIGNAL].forEach((signal) => {
         signalsData[signal.locoNetId] = signal;
     });

     const pointsData: TurnoutsState = {};
     data[ENTITY_TURNOUT].forEach((point) => {
         pointsData[point.locoNetId] = point;
     });

     const ABSectorsData: ABSectorsState = {};
     data[ENTITY_AB_SECTOR].forEach((sector) => {
         ABSectorsData[sector.locoNetId] = sector;
     });

     const biDirABsData: BiDirABsState = {};
     data[ENTITY_BI_DIR_AB].forEach((AB) => {
         biDirABsData[AB.locoNetId] = AB;
     });

     return {
         ...store,
         [ENTITY_SECTOR]: sectorsData,
         [ENTITY_SIGNAL]: signalsData,
         [ENTITY_TURNOUT]: pointsData,
         [ENTITY_AB_SECTOR]: ABSectorsData,
         [ENTITY_BI_DIR_AB]: biDirABsData,
     };*/
};
function objectRetrieve(id, accessKey, store, action) {
    const { data } = action.message;
    return Object.assign(Object.assign({}, store), { [accessKey]: Object.assign(Object.assign({}, store[accessKey]), { [+id]: data }) });
}
const initState = {
    [entity_1.ENTITY_SIGNAL]: {},
    [entity_1.ENTITY_SECTOR]: {},
    [entity_1.ENTITY_TURNOUT]: {},
    [entity_1.ENTITY_AB_SECTOR]: {},
    [entity_1.ENTITY_BI_DIR_AB]: {},
};
exports.objectState = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        case webSocets_1.ACTION_CONNECTION_CLOSE:
            return initState;
        default:
            return state;
    }
};
