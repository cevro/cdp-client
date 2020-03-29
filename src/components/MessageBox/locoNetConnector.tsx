import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '@app/reducers';

interface StateProps {
    locoNetConnector: any;
}

class LocoNetConnector extends React.Component<StateProps, {}> {
    public render() {
        // const {locoNetConnector} = this.props;
        return null;
        /*   return (<div className="list-group list-scroll">
               {locoNetConnector.avaiablePorts.map(() => {
               })}
           </div>)*/
    }
}

const mapStateToProps = (state: Store): StateProps => {
    return {
        locoNetConnector: null,// state.objectState.locoNetConnector,
    };
};

export default connect(mapStateToProps, null)(LocoNetConnector);
