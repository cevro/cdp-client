import {
    Action,
    Dispatch,
} from 'redux';
import {
    ENTITY_BI_DIR_AB,
    ENTITY_SECTOR,
    ENTITY_SIGNAL,
    ENTITY_TURNOUT,
} from '@definitions/entity';
import { dispatchFetch } from 'app/fetchApi/netteFetch';
import { BackendSector, BackendTurnout } from 'app/consts/interfaces';

export const changeSector = (dispatch: Dispatch<Action<string>>, id: number, state: BackendSector.State) => {
    if (confirm('Rly?')) {
        return dispatchFetch(ENTITY_SECTOR + '/' + id, dispatch, JSON.stringify({state}));
    }
};

export const changeSignal = (dispatch: Dispatch<Action<string>>, id: number, aspect: number) => {
    if (confirm('Rly?')) {
        return dispatchFetch(ENTITY_SIGNAL + '/' + id, dispatch, JSON.stringify({aspect}));
    }
};

export const changeTurnout = (dispatch: Dispatch<Action<string>>, turnoutId: number, position: BackendTurnout.EndPosition) => {
    if (confirm('Rly?')) {
        return dispatchFetch(ENTITY_TURNOUT + '/' + turnoutId, dispatch, JSON.stringify({position}));
    }
};

export const changeABDir = (dispatch: Dispatch<Action<string>>, id: number, dir: -1 | 1) => {
    return dispatchFetch(ENTITY_BI_DIR_AB + '/' + id, dispatch, JSON.stringify({dir}));
};
