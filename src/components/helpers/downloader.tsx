import * as React from 'react';
import { connect } from 'react-redux';
import {
    connectionClose,
    onMessageRetrieve,
} from 'app/actions/webSocets';
import { WebSocketStateUpdateMessage } from 'app/consts/messages';
import { Dispatch, Action } from 'redux';

interface DispatchProps {

    onMessage(data: WebSocketStateUpdateMessage): void;

    onConnectionClose(): void;
}

class Downloader extends React.Component<DispatchProps, {}> {
    private ws: WebSocket;

    public componentDidMount() {
        this.connect();
    }

    public render() {
        return <div className="fixed-bottom">
            {this.ws && this.getStateLabel(this.ws.readyState)}
        </div>;
    }

    private getStateLabel(state: number) {
        switch (state) {
            case 0:
                return <span className="text-info">CONNECTING...</span>;
            case 1:
                return <span className="text-success">OPEN</span>;
            case 2:
                return <span className="text-warning">CLOSING...</span>;
            case 3:
                return <span className="text-danger">CLOSED</span>;
            default:
                return <span className="text-muted">undefined</span>;
        }
    }

    private connect() {
        const wsServer = window.location.hostname;
        // const wsServer = '192.168.1.144';
        const url = 'ws://' + wsServer + ':8081/';
        this.ws = new WebSocket(url, 'echo-protocol');
        this.ws.onmessage = ({data}) => {
            const parsedData: WebSocketStateUpdateMessage = JSON.parse(data);
            this.props.onMessage(parsedData);
        };
        this.ws.onclose = () => {
            this.props.onConnectionClose();
            this.ws.close();
            setTimeout(() => {
                this.connect();
                this.forceUpdate();
            }, 1000);
        };
        /*   this.ws.onerror = () => {
               this.ws.close();
               setTimeout(() => {
                   this.connect();
                   this.forceUpdate();
               }, 1000);
           };*/
        this.ws.onopen = () => {
            this.forceUpdate();
        };
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        onMessage: (data) => dispatch(onMessageRetrieve(data)),
        onConnectionClose: () => dispatch(connectionClose()),
    };
};

export default connect(null, mapDispatchToProps)(Downloader);
