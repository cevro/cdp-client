import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'app/reducers';
import { ResponseMessage } from 'app/reducers/messages';

interface StateProps {
    messages: ResponseMessage[];
}

class MessageBox extends React.Component<StateProps, {}> {
    public render() {
        const {messages} = this.props;
        const messageRows = messages.map((message, index) => {
            const dateObject = new Date();
            return (<div className="list-group-item" key={index}>
                <div className="row">
                    <small
                        className="col-3">{dateObject.getHours()}:
                        {dateObject.getMinutes()}:
                        {dateObject.getSeconds()}.
                        {dateObject.getMilliseconds()}
                    </small>
                    <span className="col-9">{message.message.toString()}</span>
                </div>
            </div>);
        });
        return (<div className="list-group list-scroll">
            {messageRows}
        </div>);
    }
}

// <LocoNetConnector/>

const mapStateToProps = (state: Store): StateProps => {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps, null)(MessageBox);
