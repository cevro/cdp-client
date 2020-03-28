"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signalTypes = new class {
    constructor() {
        this.TYPE_ENTRY = 1;
        this.TYPE_EXIT = 2;
        this.TYPE_PATH = 3;
        this.TYPE_SHUNT = 4;
        this.TYPE_AB = 5;
    }
    getAllTypes() {
        return [this.TYPE_ENTRY, this.TYPE_EXIT, this.TYPE_PATH, this.TYPE_SHUNT, this.TYPE_AB];
    }
    getLabel(type) {
        switch (type) {
            case this.TYPE_ENTRY:
                return 'entry';
            case this.TYPE_EXIT:
                return 'exit';
            case this.TYPE_PATH:
                return 'path';
            case this.TYPE_SHUNT:
                return 'shunt';
            case this.TYPE_AB:
                return 'AB';
            default:
                throw new Error();
        }
    }
};
