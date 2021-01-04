import * as React from 'react';
import { connect } from 'react-redux';
import {
    Action,
    Dispatch,
} from 'redux';
import { Store } from '../reducers';
import { buildRoute } from '../actions/routeBuilder';
import { BackendRouteLock } from 'app/consts/interfaces/routeLock';
import BuildOptions = BackendRouteLock.BuildOptions;

interface StateProps {
    availableRoutes: any[];
    startSignal: string;
    endSector: string;
}

interface DispatchProps {
    onBuildRoute(routeUId: string, buildOptions: BuildOptions): void;
}

class RouteBuilder extends React.Component<StateProps & DispatchProps, BuildOptions> {
    constructor(props) {
        super(props);
        this.state = {
            40: false,
            PN: false,
            alert: false,
        };
    }

    public render() {
        const {onBuildRoute, availableRoutes} = this.props;

        /* const objects = ;*/

        return (<div className="list-group">
            {
                ['1L-L1', '1L-L3', '3-3a', '3a-BE2', '3a-BE1', '3a-3'].map((route) => {

                    return (<div className="list-group-item" key={route}>
                            <h6>{route}</h6>
                            <div className="form-check">
                                <input
                                    checked={this.state.PN}
                                    type="checkbox"
                                    disabled={this.state[40] || this.state.alert}
                                    onChange={(event) => {
                                        this.setState({
                                            PN: !!event.target.checked,
                                            40: false,
                                            alert: false,
                                        });
                                    }}
                                />
                                <label>PN</label>
                            </div>
                            <div className="form-check">
                                <input
                                    checked={this.state[40]}
                                    disabled={this.state.PN}
                                    type="checkbox"
                                    onChange={(event) => {
                                        this.setState({
                                            PN: false,
                                            40: !!event.target.checked,
                                        });
                                    }}/>
                                <label>40km/h</label>
                            </div>
                            <div className="form-check">
                                <input
                                    checked={this.state.alert}
                                    disabled={this.state.PN}
                                    type="checkbox"
                                    onChange={(event) => {
                                        this.setState({
                                            PN: false,
                                            alert: !!event.target.checked,
                                        });
                                    }}/>
                                <label>Trvale výstraha</label>
                            </div>
                            <button onClick={() => {
                                const state = this.state;
                                onBuildRoute(route, {
                                    ...state,
                                });
                            }} className="col-6 btn btn-success">Build
                            </button>

                        </div>
                    );
                })
            }
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onBuildRoute: (routeUId: string, buildOptions: BuildOptions) => buildRoute(dispatch, routeUId, buildOptions),
    };
};

const mapStateToProps = (state: Store): StateProps => {
    return {
        availableRoutes: state.routeBuilder.availableRoutes,
        startSignal: state.routeBuilder.startSignalUId,
        endSector: state.routeBuilder.endSectorUId,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
