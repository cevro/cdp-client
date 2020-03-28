"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const signalChange_1 = require("./signalChange");
const Icon_1 = require("@app/components/Scheme/Parts/Signals/ContextMenu/Icon");
const signal_1 = require("@app/middleware/signal");
const signalTypes_1 = require("@definitions/signals/signalTypes");
class Row extends React.Component {
    render() {
        const { signalDef, signalState } = this.props;
        const displayState = signalState ? signalState.displayAspect : undefined;
        const requestedState = signalState ? signalState.requestedAspect : undefined;
        return React.createElement(React.Fragment, null,
            React.createElement("td", null,
                React.createElement("div", { className: "col-12 text-center" },
                    React.createElement("h1", null,
                        React.createElement("span", { className: 'badge signal-badge-' + signalDef.type }, signalDef.name))),
                React.createElement("hr", null),
                React.createElement("div", { className: "col-12 row" },
                    React.createElement("span", { className: "col-3" },
                        "locoNetId: ",
                        signalDef.locoNetId),
                    React.createElement("span", { className: "col-3" },
                        "name: ",
                        signalDef.name),
                    React.createElement("span", { className: "col-3" },
                        "conf: ",
                        signalDef.lights.join(' ')),
                    React.createElement("span", { className: "col-3" },
                        "type: ",
                        signalTypes_1.signalTypes.getLabel(signalDef.type))),
                React.createElement("hr", null),
                React.createElement("div", { className: "col-12 row" },
                    React.createElement("span", { className: "col-4" },
                        "display: (",
                        displayState,
                        ") ",
                        signal_1.signalStateMapping(displayState)),
                    React.createElement("span", { className: "col-4" },
                        "requested: (",
                        requestedState,
                        ") ",
                        signal_1.signalStateMapping(requestedState)),
                    React.createElement("span", { className: "col-4" },
                        React.createElement(signalChange_1.default, { locoNetId: signalDef.locoNetId, signalState: signalState })))),
            React.createElement("td", null,
                React.createElement(Icon_1.default, { signal: signalDef, state: displayState })));
    }
}
exports.default = Row;
