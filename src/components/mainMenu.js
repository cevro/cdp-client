"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class MainMenu extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#/pu" }, "ZST P\u00FAchov")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#/ab-pu-lpm" }, "AB PU-LpM")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#/full-control" }, "full control"))));
    }
}
exports.default = MainMenu;
