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
import { RequestedTurnoutPosition } from '@definitions/turnouts';
import { dispatchFetch } from 'app/fetchApi/netteFetch';

export const changeSector = (dispatch: Dispatch<Action<string>>, id: number, state: number) => {
    return dispatchFetch(ENTITY_SECTOR + '/' + id, dispatch, JSON.stringify({state}));
};

export const changeSignal = (dispatch: Dispatch<Action<string>>, id: number, aspect: number) => {
    return dispatchFetch(ENTITY_SIGNAL + '/' + id, dispatch, JSON.stringify({aspect}));
};

export const changeTurnout = (dispatch: Dispatch<Action<string>>, id: number, requestedPosition: RequestedTurnoutPosition) => {
    return dispatchFetch(ENTITY_TURNOUT + '/' + id, dispatch, JSON.stringify({requestedPosition}));
};

export const changeABDir = (dispatch: Dispatch<Action<string>>, id: number, dir: RequestedTurnoutPosition) => {
    return dispatchFetch(ENTITY_BI_DIR_AB + '/' + id, dispatch, JSON.stringify({dir}));
};
