"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeBuilder_1 = require("../actions/routeBuilder");
const webSocets_1 = require("../actions/webSocets");
const initState = {
    startSignalId: null,
    endSectorId: null,
    availableRoutes: [],
    routeBuilderState: {
        buffer: [],
        hasError: false,
        locked: false,
    },
};
const signalSelect = (state, action) => {
    return Object.assign(Object.assign({}, state), { startSignalId: action.id, endSectorId: null, availableRoutes: [] });
};
const sectorSelect = (state, action) => {
    if (state.startSignalId === null) {
        return state;
    }
    return Object.assign(Object.assign({}, state), { endSectorId: action.id });
};
const registerRoutes = (state, action) => {
    /*
    if (action.message.entity === 'route-finder' && action.message.action === 'found') {
        return {
            ...state,
            startSignalId: null,
            endSectorId: null,
            availableRoutes: action.message.data.routes,
        };
    }*/
    return state;
};
const clearSelect = (state) => {
    return Object.assign(Object.assign({}, state), { startSignalId: null, endSectorId: null, availableRoutes: [] });
};
exports.routeBuilder = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case routeBuilder_1.ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        case routeBuilder_1.ACTION_SECTOR_SELECT:
            return sectorSelect(state, action);
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return registerRoutes(state, action);
        case routeBuilder_1.ACTION_CLEAR_SELECT:
            return clearSelect(state);
        default:
            return state;
    }
};
