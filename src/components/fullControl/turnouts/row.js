"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const turnoutChange_1 = require("./turnoutChange");
class Row extends React.Component {
    render() {
        const { turnoutDef, turnoutState } = this.props;
        const position = turnoutState ? turnoutState.position : undefined;
        const requestedPosition = turnoutState ? turnoutState.requestedPosition : undefined;
        const locked = turnoutState ? turnoutState.locked : [];
        return React.createElement("tr", null,
            React.createElement("td", null,
                React.createElement("div", { className: "col-12 text-center" },
                    React.createElement("h1", null,
                        React.createElement("span", null, turnoutDef.name))),
                React.createElement("hr", null),
                React.createElement("div", { className: "col-12 row" },
                    React.createElement("span", { className: "col-3" },
                        "locoNetId: ",
                        turnoutDef.locoNetId),
                    React.createElement("span", { className: "col-3" },
                        "sector: ",
                        turnoutDef.sector),
                    React.createElement("span", { className: "col-3" },
                        "position: ",
                        position),
                    React.createElement("span", { className: "col-3" },
                        "requested position: ",
                        requestedPosition),
                    React.createElement("span", { className: "col-12" }, locked.join(' '))),
                React.createElement("hr", null),
                React.createElement(turnoutChange_1.default, { locoNetId: turnoutDef.locoNetId, turnoutState: turnoutState })));
    }
    getTurnoutIcon() {
        const { turnoutState, turnoutDef: { home, SVGData: { x, y, rotate, dir }, }, } = this.props;
        const position = turnoutState ? turnoutState.position : undefined;
        const requestedState = turnoutState ? turnoutState.requestedPosition : undefined;
        const locked = turnoutState ? turnoutState.locked : [];
        return (React.createElement("g", { className: 'point ' + this.getStateClassName(position, !!locked.length, (requestedState !== position)), transform: 'translate(' + x + ',' + y + ')' },
            React.createElement("g", { transform: 'rotate(' + rotate + ')' },
                React.createElement("polygon", { points: '0,-10 10,-10 10,10 0,10', fill: "black" }),
                (!position || (position === home)) ? React.createElement("line", { x1: 0, x2: 10, y1: 0, y2: 0 }) : null,
                (!position || (position !== home)) ?
                    React.createElement("line", { x1: 0, x2: 10, y1: 0, y2: (dir === 'L') ? (-6) : (6) }) : null)));
    }
    getStateClassName(state, lock, changing) {
        if (changing) {
            return 'changing';
        }
        if (!state) {
            return 'undefined';
        }
        if (lock) {
            return 'locked';
        }
        return 'not-locked';
    }
}
exports.default = Row;
