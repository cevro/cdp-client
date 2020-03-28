"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signalTypes_1 = require("@app/consts/signals/signalTypes");
exports.ABLights = ['HZ', 'Z', 'C'];
exports.ABDef = {
    type: signalTypes_1.signalTypes.TYPE_AB,
    lights: exports.ABLights,
};
