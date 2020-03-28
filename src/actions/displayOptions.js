"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_TOGGLE_SIGNAL_TEXT = 'ACTION_TOGGLE_SIGNAL_TEXT';
exports.toggleSignalText = (signalType) => {
    return {
        type: exports.ACTION_TOGGLE_SIGNAL_TEXT,
        signalType,
    };
};
exports.ACTION_TOGGLE_POINT_TEXT = 'ACTION_TOGGLE_POINT_TEXT';
exports.toggleTurnoutText = () => {
    return {
        type: exports.ACTION_TOGGLE_POINT_TEXT,
    };
};
/*
export const ACTION_TOGGLE_SECTOR_TEXT = 'ACTION_TOGGLE_SECTOR_TEXT';
export const toggleSectorText = (): Action<string> => {
    return {
        type: ACTION_TOGGLE_SECTOR_TEXT,
    };
};*/
