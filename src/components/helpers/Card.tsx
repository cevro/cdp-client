import * as React from 'react';

interface OwnProps {
    name: string | JSX.Element;
}

export default class Card extends React.Component<OwnProps, {}> {

    public render() {

        return (
            <div className="card bg-black border-light">
                <div className="card-header">
                    <h5>{this.props.name}</h5>
                </div>
                {this.props.children}
            </div>

        );
    }
}
