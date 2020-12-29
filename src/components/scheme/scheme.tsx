import * as React from 'react';
import Card from 'app/components/helpers/Card';
import MessageBox from 'app/components/MessageBox/messageBox';
import Routes from 'app/components/MessageBox/Routes';
import ABSectorsPreview from 'app/components/MessageBox/ABSector';
import RouteBuilderMessageBox from 'app/components/MessageBox/routeBuilderMessageBox';
import SectorsPreview from 'app/components/MessageBox/sectorsPreview';
import PointsPreview from 'app/components/MessageBox/pointsPreview';
import Options from 'app/components/Options/options';
import ContextMenu from 'app/components/scheme/parts/signals/contextMenu/contextMenu';
import Layout from 'app/components/scheme/layout/layout';
import { layouts } from 'app/config/layouts';
import { RouteComponentProps, withRouter } from 'react-router';

interface OwnProps extends RouteComponentProps<{ layout: string }> {

}

class Scheme extends React.Component<OwnProps, {}> {

    public render() {
        const scheme = layouts.filter((layout) => {
            return layout.id === this.props.match.params.layout;
        })[0];
        if (!scheme) {
            return <p className="alert alert-danger">Layout does not exists.</p>
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
                                <SectorsPreview sectors={scheme.objects.sectors}/>
                            </Card>
                        </div>
                        }
                        {scheme.cards.points &&
                        <div className="col-3">
                            <Card name={'Turnouts'}>
                                <PointsPreview/>
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
// <g className="bg-scheme">
//                     <polyline points="0,0 2100,0"/>
//                     <polyline points="0,30 2100,30"/>
//                     <polyline points="0,60 2000,60"/>
//
//                     <polyline points="150,0 200,30"/>
//                     <polyline points="125,60 175,30"/>
//                     <polyline points="225,30 275,0"/>
//                     <polyline points="275,30 325,60"/>
//
//                     <polyline points="350,0 400,-30 1575,-30 1625,0"/>
//                     <polyline points="400,-30 450,-60 1000,-60 1050,-30"/>
//
//                     <polyline points="400,30 600,150 1450,150"/>
//                     <polyline points="500,90 1725,90 1850,210 1900,210"/>
//                     <polyline points="550,90 600,120 1725,120 1850,240 1900,240"/>
//
//                     <polyline points="375,60 725,270 1100,270 1200,210"/>
//                     <polyline points="575,180 1400,180"/>
//                     <polyline points="625,210 1350,210 1500,120"/>
//                     <polyline points="675,210 725,240 1500,240"/>
//
//                     <polyline points="1425,0 1475,30"/>
//                     <polyline points="1500,30 1700,150"/>
//                     <polyline points="1600,120 1700,60"/>
//
//                     <polyline points="1750,60 1800,90"/>
//
//                     <polyline points="1775,60 1825,30"/>
//                     <polyline points="1850,30 1900,0"/>
//
//                     <polyline points="1700,30 1650,0"/>
//                 </g>
