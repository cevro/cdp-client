"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const messages_1 = require("@app/actions/messages");
const signal_1 = require("@app/middleware/signal");
class SignalChange extends React.Component {
    render() {
        const { signalState } = this.props;
        return (React.createElement("select", { className: 'form-control', value: signalState ? signalState.displayAspect : -1, onChange: (e) => {
                if (+e.target.value !== -1) {
                    this.props.onChangeSignal(+e.target.value);
                }
            } }, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => {
            return React.createElement("option", { key: value, value: value },
                "(",
                value,
                ") ",
                signal_1.signalStateMapping(value));
        })));
    }
}
const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeSignal: (state) => messages_1.changeSignal(dispatch, ownProps.locoNetId, state),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SignalChange);
