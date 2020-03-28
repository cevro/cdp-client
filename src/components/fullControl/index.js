"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const signals_1 = require("./signals/");
const turnouts_1 = require("./turnouts/");
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tab: 'signals' };
    }
    render() {
        const components = [
            {
                id: 'signals',
                component: signals_1.default,
                label: 'Signals',
            },
            {
                id: 'turnouts',
                component: turnouts_1.default,
                label: 'Points',
            },
        ];
        return (React.createElement("div", { className: "container" },
            React.createElement("ul", { className: "nav nav-tabs" }, components.map((value, index) => {
                return React.createElement("li", { key: index, className: "nav-item" },
                    React.createElement("button", { className: 'btn nav-link btn-link ' + (this.state.tab === value.id ? 'active' : ''), onClick: (e) => {
                            e.preventDefault();
                            this.setState({ tab: value.id });
                        } }, value.label));
            })),
            React.createElement("div", { className: "tab-content" }, components.map((value, index) => {
                return React.createElement("div", { key: index, className: 'tab-pane fade ' + (this.state.tab === value.id ? 'show active' : '') }, React.createElement(value.component));
            }))));
    }
}
exports.default = Index;
