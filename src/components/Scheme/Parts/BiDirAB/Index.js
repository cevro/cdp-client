"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const BiDirAB_1 = require("./BiDirAB");
class BiDirABs extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null, this.props.ABs.map((sector, key) => {
            return React.createElement(BiDirAB_1.default, { key: key, definition: sector });
        })));
    }
}
exports.default = BiDirABs;
