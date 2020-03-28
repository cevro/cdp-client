"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webSocets_1 = require("../actions/webSocets");
const messageRetrieve = (state, action) => {
    const newMessages = [action.message, ...state];
    if (newMessages.length > 20) {
        newMessages.pop();
    }
    return newMessages;
};
exports.messages = (state = [], action) => {
    const { type } = action;
    switch (type) {
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        default:
            return state;
    }
};
