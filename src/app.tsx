import * as React from 'react';
import MessageBox from './components/MessageBox/MessageBox';
import Options from './components/Options/options';
import RouteBuilderMessageBox from './components/MessageBox/RouteBuilderMessageBox';
import SectorsPreview from './components/MessageBox/SectorsPreview';
import PointsPreview from './components/MessageBox/PointsPreview';
import Card from './components/helpers/Card';
import Routes from './components/MessageBox/Routes';
import ContextMenu from './components/Scheme/parts/signals/contextMenu/contextMenu';
import {frontEndScheme} from './schemes/';
import Scheme from './components/Scheme';
import ABSectorsPreview from './components/MessageBox/ABSector/Index';

interface Props {
    accessKey: string;
}

export default class App extends React.Component<Props, {}> {

    public render() {
        const scheme = frontEndScheme[this.props.accessKey];
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

                        <Scheme scheme={scheme}/>

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

                <ContextMenu signals={scheme.objects.signals}/>
            </>
        );
    }
}
