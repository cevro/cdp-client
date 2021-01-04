import {
    Action,
    Dispatch,
} from 'redux';
import { dispatchFetch } from 'app/fetchApi/netteFetch';

export const changeABCondition =
    (dispatch: Dispatch<Action<string>>, locoNetId: number, state: number) => {
        return dispatchFetch( 'bi-block/' + locoNetId, dispatch, JSON.stringify({blockCondition: state}));
    };

export const removeABError =
    (dispatch: Dispatch<Action<string>>, locoNetId: number) => {
        return dispatchFetch( 'bi-block/' + locoNetId, dispatch, JSON.stringify({error: 0}));
    };
