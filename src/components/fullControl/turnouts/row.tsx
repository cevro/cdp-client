import * as React from 'react';
import TurnoutChange from './turnoutChange';
import { BackendTurnout } from 'app/consts/interfaces/turnout';

interface OwnProps {
    state: BackendTurnout.Definition | null;
}

export default class Row extends React.Component<OwnProps, {}> {
    public render() {
        const {state} = this.props;
        return <tr>
            <td>
                <div className="col-12 text-center">
                    <h1>
                        <span>{state.name}</span>
                    </h1>
                </div>
                <hr/>
                <div className="col-12 row">
                    <span className="col-3">position: {state.currentPosition}</span>
                    <span className="col-3">requested position: {state.requestedPosition}</span>
                </div>
                <hr/>
                <TurnoutChange state={state}/>
            </td>

        </tr>;
    }

    /*  public getTurnoutIcon(): JSX.Element {
          const {
              turnoutState,
              turnoutDef: {
                  home,
                  SVGData: {x, y, rotate, dir},
              },
          } = this.props;
          const position = turnoutState ? turnoutState.position : undefined;
          const requestedState = turnoutState ? turnoutState.requestedPosition : undefined;
          const locked = turnoutState ? turnoutState.locked : [];
          return (
              <g className={'point ' + this.getStateClassName(position, !!locked.length, (requestedState !== position))}
                 transform={'translate(' + x + ',' + y + ')'}>
                  <g transform={'rotate(' + rotate + ')'}>
                      <polygon points={'0,-10 10,-10 10,10 0,10'} fill="black"/>
                      {(!position || (position === home)) ? <line x1={0} x2={10} y1={0} y2={0}/> : null}
                      {(!position || (position !== home)) ?
                          <line x1={0} x2={10} y1={0} y2={(dir === 'L') ? (-6) : (6)}/> : null}

                  </g>
              </g>
          );
      }*/
    /*
        private getStateClassName(state: number | null, lock: boolean, changing: boolean): string {
            if (changing) {
                return 'changing';
            }
            if (!state) {
                return 'undefined';
            }
            if (lock) {
                return 'locked';
            }
            return 'not-locked';
        }*/

    // <span className="col-3">name: {signalDef.name}</span>
    //                     <span className="col-3">conf: {signalDef.lights.join(' ')}</span>
    //                     <span className="col-3">type: {SignalTypes.getLabel(signalDef.type)}</span>

    // <div className="col-12 row">
    //                     <span className="col-4">display: ({displayState}) {signalStateMapping(displayState)}</span>
    //                     <span
    //                         className="col-4">requested: ({requestedState}) {signalStateMapping(requestedState)}</span>
    //                     <span className="col-4">
    //                             <SignalChange
    //                                 locoNetId={signalDef.locoNetId}
    //                                 signalState={signalState}/>
    //                         </span>
    //                 </div>

    // <Icon signal={signalDef} state={displayState}/>
}

