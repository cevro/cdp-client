import * as React from 'react';
import Card from '../helpers/card';
import MessageBox from 'app/components/MessageBox/messageBox';
import Routes from 'app/components/MessageBox/Routes';
import ABSectorsPreview from 'app/components/MessageBox/ABSector';
import RouteBuilderMessageBox from 'app/components/MessageBox/routeBuilderMessageBox';
import Options from 'app/components/Options/options';
import ContextMenu from 'app/components/scheme/parts/signals/contextMenu/contextMenu';
import Layout from 'app/components/scheme/layout/layout';
import { layouts } from 'app/config/layouts';
import { RouteComponentProps, withRouter } from 'react-router';
import SectorRow from 'app/components/scheme/cards/sectorRow';
import TurnoutRow from 'app/components/scheme/cards/turnoutRow';

interface OwnProps extends RouteComponentProps<{ layout: string }> {

}

class Scheme extends React.Component<OwnProps, {}> {

    public render() {
        const scheme = layouts.filter((layout) => {
            return layout.id === this.props.match.params.layout;
        })[0];
        if (!scheme) {
            return <p className="alert alert-danger">Layout does not exists.</p>;
        }
        return (
            <>
                <div className="container-fluid">
                    <div className="row col-12 top-panel">

                        <div className="col-3">
                            <Card name={'Messages'}>
                                <MessageBox/>
                            </Card>
                        </div>
                        {scheme.cards.routeBuilder &&
                        <div className="col-3">
                            <Card name={'Routes'}>
                                <Routes/>
                            </Card>
                        </div>}

                        <div className="col-3">
                            <Card name={'AB Index'}>
                                <ABSectorsPreview ABSectors={scheme.objects.ABSectors}/>
                            </Card>
                        </div>
                        {scheme.cards.routes &&
                        <div className="col-3">
                            <Card name={'Built routes'}>
                                <RouteBuilderMessageBox/>
                            </Card>
                        </div>
                        }
                    </div>

                    <div className="col-12">
                        <Layout scheme={scheme}/>
                    </div>
                    <div className="row col-12 bottom-panel">
                        {scheme.cards.sectors &&
                        <div className="col-3">
                            <Card name={'Sectors'}>
                                <div className="list-group list-scroll">
                                    {scheme.objects.sectors.map((sectorDef, index) => {
                                        return <SectorRow frontendDef={sectorDef} key={index}/>;
                                    })}
                                </div>
                            </Card>
                        </div>
                        }
                        {scheme.cards.turnouts &&
                        <div className="col-3">
                            <Card name={'Turnouts'}>
                                <div className="list-group list-scroll">
                                    {scheme.objects.turnouts.map((turnoutDef) => {
                                        return <TurnoutRow frontendDef={turnoutDef} key={turnoutDef.turnoutUId}/>;
                                    })}
                                </div>
                            </Card>
                        </div>
                        }

                        <div className="col-3">
                            <Card name={'Options'}>
                                <Options/>
                            </Card>
                        </div>
                    </div>
                </div>

                <ContextMenu/>
            </>
        );
    }
}

export default withRouter(Scheme);
// <ABSectors autoBlockSectors={scheme.objects.ABSectors}/>

