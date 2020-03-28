"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class MessageBox extends React.Component {
    render() {
        const { messages } = this.props;
        const msgs = messages.map((message, index) => {
            let { method, uri, data } = message;
            const dateObject = new Date();
            return (React.createElement("div", { className: "list-group-item", key: index },
                React.createElement("div", { className: "row" },
                    React.createElement("small", { className: "col-3" },
                        dateObject.getHours(),
                        ":",
                        dateObject.getMinutes(),
                        ":",
                        dateObject.getSeconds(),
                        ".",
                        dateObject.getMilliseconds()),
                    React.createElement("span", { className: "col-2" }, method),
                    React.createElement("span", { className: "col-3" }, uri),
                    React.createElement("span", { className: "col-2" }, data.toString()))));
        });
        return (React.createElement("div", { className: "list-group list-scroll" }, msgs));
    }
}
// <LocoNetConnector/>
const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(MessageBox);
