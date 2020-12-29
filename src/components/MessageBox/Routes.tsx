import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { clearSelect } from 'app/actions/routeBuilder';
import RouteFinder from '../routeFinder';
import RouteBuilder from '../routeBuilder';
import { Store } from 'app/reducers';

interface StateProps {
    availableRoutes: any[];
}

interface DispatchProps {
    onClearSelect(): void;
}

class Routes extends React.Component<StateProps & DispatchProps, {}> {
    public componentDidUpdate() {

    }

    public render() {

        const {availableRoutes, onClearSelect} = this.props;
        return <>
            {availableRoutes.length ? <RouteBuilder/> : <RouteFinder/>}
            <button onClick={() => {
                onClearSelect()
            }} className="btn btn-warning">Clear
            </button>
        </>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onClearSelect: () => dispatch(clearSelect()),
    };
};

const mapStateToProps = (store: Store): StateProps => {
    return {
        availableRoutes: store.routeBuilder.availableRoutes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
