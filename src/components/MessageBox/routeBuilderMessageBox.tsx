import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import { BackendRouteLock } from 'app/consts/interfaces/routeLock';
import { BackedRouteBuilder } from 'app/consts/interfaces/routeBuilder';

interface StateProps {
    routeBuilder: BackedRouteBuilder.Snapshot;
}

class RouteBuilderMessageBox extends React.Component<StateProps, {}> {

    public render() {

        return (<div className="list-group list-scroll">
            <div className="list-group-item">
                <span className={this.props.routeBuilder ? 'fa fa-lock' : 'fa fa-unlock-alt'}/>
            </div>

            {this.props.routeBuilder.buffer.map((bufferItem) => {
                return <div className="list-group-item" key={bufferItem.lockUId}>
                    <div className="row">
                        <small className="col-3">{bufferItem.lockUId}</small>
                        <span className="col-2">{bufferItem.routeUId}</span>
                        <div className="col-2">
                            <span className={this.getClassNameByState(bufferItem.state)}>{bufferItem.state}</span>
                        </div>
                        <small className="col-3">{bufferItem.reason}</small>
                        <small className="col-2">
                            {bufferItem.buildOptions[40] ? '40' : null}
                            {bufferItem.buildOptions.PN ? 'PN' : null}
                            {bufferItem.buildOptions.alert ? 'alert' : null}
                        </small>
                    </div>
                </div>;
            })}
        </div>);
    }

    private getClassNameByState(state: BackendRouteLock.State): string {
        switch (state) {
            case 'waiting':
                return 'badge badge-secondary';
            case 'built':
                return 'badge badge-success';
            case 'building':
                return 'badge badge-warning';
            default:
                return 'badge';
        }
    }
}

const mapStateToProps = (store: Store): StateProps => {
    return {
        routeBuilder: store.backendStore.routeBuilder,
    };
};

export default connect(mapStateToProps, null)(RouteBuilderMessageBox);
