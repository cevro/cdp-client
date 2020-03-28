"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@definitions/entity");
const webSocets_1 = require("../webSocets");
function send(dispatch, uri, method, data) {
    return dispatch(webSocets_1.onSendMessage({
        method,
        uri,
        data,
    }));
}
exports.send = send;
exports.changeSector = (dispatch, id, state) => {
    return send(dispatch, entity_1.ENTITY_SECTOR + '/' + id, 'patch', { id, state });
};
exports.changeSignal = (dispatch, id, state) => {
    return dispatch(webSocets_1.onSendMessage({
        method: 'patch',
        uri: entity_1.ENTITY_SIGNAL + '/' + id,
        data: { id, state },
    }));
};
exports.changeTurnout = (dispatch, id, requestedPosition) => {
    return dispatch(webSocets_1.onSendMessage({
        method: 'patch',
        uri: entity_1.ENTITY_TURNOUT + '/' + id,
        data: {
            id,
            requestedPosition,
        },
    }));
};
exports.changeABDir = (dispatch, id, dir) => {
    return dispatch(webSocets_1.onSendMessage({
        method: 'patch',
        uri: entity_1.ENTITY_BI_DIR_AB + '/' + id,
        data: { id, dir },
    }));
};
