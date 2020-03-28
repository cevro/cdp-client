"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ABSector_1 = require("./ABSector");
class ABSectors extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null, this.props.autoBlockSectors.map((sector, key) => {
            return React.createElement(ABSector_1.default, { key: key, definition: sector });
        })));
    }
}
exports.default = ABSectors;
