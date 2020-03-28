"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const linePuLpM_1 = require("@app/schemes/linePuLpM");
const row_1 = require("./row");
const points_1 = require("@definitions/points");
const entity_1 = require("@definitions/entity");
class TurnoutsTable extends React.Component {
    render() {
        const { turnoutsState } = this.props;
        return (React.createElement("div", { className: "container" },
            React.createElement("table", { className: "table table-hover table-striped table-dark" },
                React.createElement("tbody", null, this.getTurnouts().map((turnoutDef, index) => {
                    return React.createElement(row_1.default, { key: index, turnoutDef: turnoutDef, turnoutState: turnoutsState[turnoutDef.locoNetId] });
                })))));
    }
    getTurnouts() {
        return [...linePuLpM_1.autoBlockPuLpM.objects.points, ...points_1.turnouts];
    }
}
const mapStateToProps = (state) => {
    return {
        turnoutsState: state.objectState[entity_1.ENTITY_TURNOUT],
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(TurnoutsTable);
