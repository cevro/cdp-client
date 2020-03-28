"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ABSector_1 = require("@app/actions/messages/ABSector");
const react_redux_1 = require("react-redux");
const entity_1 = require("@definitions/entity");
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: false };
    }
    render() {
        const { objectState, definition } = this.props;
        /*   if (this.props.displayOnlyInterest) {
               if (active === 0) {
                   return null;
               }
               if (ABCondition === 1 && error === 0) {
                   return null;
               }
           }*/
        return React.createElement("div", { className: 'list-group-item ' + this.getListClassName(objectState) },
            React.createElement("div", { className: "row" },
                React.createElement("span", { className: "col-2" }, definition.locoNetId),
                React.createElement("span", { className: "col-2" }, this.getActiveLabel(objectState)),
                React.createElement("span", { className: "col-2" }, this.getErrorLabel(objectState)),
                React.createElement("span", { className: "col-2" }, this.getStateLabel(objectState)),
                React.createElement("span", { className: "col-2" }, this.getBlockConditionLabel(objectState)),
                React.createElement("span", { className: "col-1" },
                    React.createElement("button", { className: "btn btn-link", onClick: (e) => {
                            e.preventDefault();
                            this.setState({ display: !this.state.display });
                        } },
                        React.createElement("span", { className: this.state.display ? 'fa fa-chevron-up' : 'fa fa-chevron-down' })))),
            objectState && (React.createElement("div", { className: 'row border-top ' + (this.state.display ? '' : 'd-none') },
                objectState.errorCode > 0 ?
                    React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => this.props.onRemoveABError() }, "remove ERR") : null,
                objectState.blockCondition ?
                    React.createElement("button", { className: "btn btn-sm btn-danger", onClick: () => this.props.onChangeABCondition(0) }, "Turn OFF AB condition") :
                    React.createElement("button", { className: "btn btn-sm btn-success", onClick: () => this.props.onChangeABCondition(1) }, "Turn ON AB condition"))));
    }
    getListClassName(objectState) {
        if (!objectState) {
            return 'list-item-undefined';
        }
        if (objectState.errorCode === -1 ||
            objectState.active === -1 ||
            objectState.blockCondition === -1 ||
            objectState.state === -1) {
            return 'list-item-undefined';
        }
        if (!objectState.active) {
            return 'list-item-secondary';
        }
        if (objectState.errorCode > 0) {
            return 'list-item-danger';
        }
        if (objectState.blockCondition === 0) {
            return 'list-item-warning';
        }
        return '';
    }
    getStateLabel(objectState) {
        if (!objectState) {
            return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
        }
        switch (objectState.state) {
            case 1:
                return React.createElement("span", { className: "badge badge-danger" }, "used");
            case 2:
                return null;
            default:
                return React.createElement("span", { className: "badge badge-warning" }, "undefined");
        }
    }
    getActiveLabel(objectState) {
        if (!objectState) {
            return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
        }
        switch (objectState.active) {
            case -1:
                return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
            case 0:
                return React.createElement("span", { className: "badge badge-secondary" }, "inactive");
            default:
                return null;
        }
    }
    getErrorLabel(objectState) {
        if (!objectState) {
            return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
        }
        switch (objectState.errorCode) {
            case -1:
                return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
            case 0:
                return null;
            default:
                return React.createElement("span", { className: "badge badge-danger" }, objectState.errorMessage);
        }
    }
    getBlockConditionLabel(objectState) {
        if (!objectState) {
            return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
        }
        switch (objectState.blockCondition) {
            case -1:
                return React.createElement("span", { className: "badge badge-undefined" }, "undefined");
            case 0:
                return React.createElement("span", { className: "badge badge-warning" }, "bc: OFF");
            default:
                return null;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        ABSectorsState: state.objectState[entity_1.ENTITY_AB_SECTOR],
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeABCondition: (state) => ABSector_1.changeABCondition(dispatch, ownProps.definition.locoNetId, state),
        onRemoveABError: () => ABSector_1.removeABError(dispatch, ownProps.definition.locoNetId),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Row);
