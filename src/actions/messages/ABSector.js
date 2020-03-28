"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webSocets_1 = require("../webSocets");
const entity_1 = require("@definitions/entity");
exports.changeABCondition = (dispatch, locoNetId, state) => {
    return dispatch(webSocets_1.onSendMessage({
        method: 'patch',
        uri: entity_1.ENTITY_AB_SECTOR + '/' + locoNetId,
        data: { blockCondition: state },
    }));
};
exports.removeABError = (dispatch, locoNetId) => {
    return dispatch(webSocets_1.onSendMessage({
        method: 'patch',
        uri: entity_1.ENTITY_AB_SECTOR + '/' + locoNetId,
        data: { error: 0 },
    }));
};
