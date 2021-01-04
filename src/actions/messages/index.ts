import {
    Action,
    Dispatch,
} from 'redux';
import { dispatchFetch } from 'app/fetchApi/netteFetch';
import { BackendTurnout } from 'app/consts/interfaces/turnout';
import { BackendSector } from 'app/consts/interfaces/sector';

export const changeSector = (dispatch: Dispatch<Action<string>>, sectorUId: string, state: BackendSector.States) => {
    if (confirm('Rly?')) {
        return dispatchFetch('sector/' + sectorUId, dispatch, JSON.stringify({state}));
    }
};

export const changeSignal = (dispatch: Dispatch<Action<string>>, signalUId: string, aspect: number) => {
    if (confirm('Rly?')) {
        return dispatchFetch('signal/' + signalUId, dispatch, JSON.stringify({aspect}));
    }
};

export const changeTurnout = (dispatch: Dispatch<Action<string>>, turnoutId: string, position: BackendTurnout.EndPosition) => {
    if (confirm('Rly?')) {
        return dispatchFetch('turnout/' + turnoutId, dispatch, JSON.stringify({position}));
    }
};

export const changeABDir = (dispatch: Dispatch<Action<string>>, id: string, dir: -1 | 1) => {
    return dispatchFetch('bi-block/' + id, dispatch, JSON.stringify({dir}));
};
