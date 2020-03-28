"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const messages_1 = require("@app/actions/messages");
class TurnoutChange extends React.Component {
    render() {
        const { turnoutState } = this.props;
        const buttons = [];
        const state = turnoutState ? turnoutState.position : 0;
        if (state !== -1) {
            buttons.push(React.createElement("button", { key: '-', className: "btn btn-sm btn-secondary", onClick: () => {
                    this.props.onChangeTurnout(-1);
                } }, "Set position closed (-)"));
        }
        if (state !== 1) {
            buttons.push(React.createElement("button", { key: '+', className: "btn btn-sm btn-primary", onClick: () => {
                    this.props.onChangeTurnout(1);
                } }, "Set position (+)"));
        }
        return React.createElement(React.Fragment, null, buttons);
    }
}
const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeTurnout: (state) => messages_1.changeTurnout(dispatch, ownProps.locoNetId, state),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TurnoutChange);
