"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pu_1 = require("./zst/pu");
const pu_lpm_1 = require("./line/pu-lpm");
const signals = Object.assign(Object.assign({}, pu_lpm_1.default), pu_1.default);
function getSignalDefinition(key) {
    return signals[key];
}
exports.getSignalDefinition = getSignalDefinition;
function getAllSignals() {
    const signalsArray = [];
    for (const index in signals) {
        if (signals.hasOwnProperty(index)) {
            signalsArray.push(signals[index]);
        }
    }
    return signalsArray;
}
exports.getAllSignals = getAllSignals;
