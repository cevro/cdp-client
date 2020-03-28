"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const Row_1 = require("./Row");
const entity_1 = require("@definitions/entity");
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayOnlyInterest: false,
        };
    }
    render() {
        const { ABSectors, ABSectorsState } = this.props;
        return (React.createElement("div", { className: "list-group list-scroll" },
            React.createElement("div", { className: "list-group-item" },
                React.createElement("button", { className: 'btn btn-secondary', onClick: () => {
                        this.setState({ displayOnlyInterest: !this.state.displayOnlyInterest });
                    } }, this.state.displayOnlyInterest ? 'Display all' : 'Display only interest')),
            ABSectors.map((sectorDef, index) => {
                const stateObject = ABSectorsState[sectorDef.locoNetId];
                return React.createElement(Row_1.default, { key: index, definition: sectorDef, displayOnlyInterest: false, objectState: stateObject });
            })));
    }
}
const mapStateToProps = (state) => {
    return {
        ABSectorsState: state.objectState[entity_1.ENTITY_AB_SECTOR],
    };
};
const mapDispatchToProps = () => {
    return {};
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Index);
