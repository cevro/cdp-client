"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linePuLpM_1 = require("./linePuLpM");
const signals_1 = require("@definitions/signals");
exports.frontEndScheme = {
    'ab-PuLpM': linePuLpM_1.autoBlockPuLpM,
    ZSTPu: {
        cards: {
            signals: true,
            sectors: true,
            ABSectors: true,
            points: true,
            routeBuilder: true,
            routes: true,
        },
        objects: {
            sectors: [],
            signals: signals_1.signals,
            points: [],
            ABSectors: [],
            biDirAB: [],
        },
        viewBox: '-300 -90 2650 400',
    },
};
