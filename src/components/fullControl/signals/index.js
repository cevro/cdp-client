"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const row_1 = require("./row");
const all_1 = require("@definitions/signals/all");
const entity_1 = require("@definitions/entity");
class SignalsTable extends React.Component {
    render() {
        const { signalsState } = this.props;
        return (React.createElement("div", { className: "container" },
            React.createElement("table", { className: "table table-hover table-striped table-dark" },
                React.createElement("tbody", null, this.getSignals().map((signalDef, index) => {
                    return React.createElement("tr", { key: index },
                        React.createElement(row_1.default, { signalDef: signalDef, signalState: signalsState[signalDef.locoNetId] }));
                })))));
    }
    getSignals() {
        return all_1.getAllSignals();
    }
}
const mapStateToProps = (state) => {
    return {
        signalsState: state.objectState[entity_1.ENTITY_SIGNAL],
    };
};
const mapDispatchToProps = () => {
    return {};
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SignalsTable);
