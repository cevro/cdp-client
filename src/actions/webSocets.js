"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';
function onMessageRetrieve(message) {
    return {
        type: exports.ACTION_MESSAGE_RETRIEVE,
        message,
    };
}
exports.onMessageRetrieve = onMessageRetrieve;
exports.ACTION_MESSAGE_SEND = 'ACTION_MESSAGE_SEND';
function onSendMessage(message) {
    return {
        type: exports.ACTION_MESSAGE_SEND,
        message,
    };
}
exports.onSendMessage = onSendMessage;
exports.ACTION_CONNECTION_CLOSE = 'ACTION_CONNECTION_CLOSE';
exports.connectionClose = () => {
    return {
        type: exports.ACTION_CONNECTION_CLOSE,
    };
};
exports.ACTION_SEND_SUCCESS = 'ACTION_SEND_SUCCESS';
exports.successSend = (id) => {
    return {
        type: exports.ACTION_SEND_SUCCESS,
        id,
    };
};
