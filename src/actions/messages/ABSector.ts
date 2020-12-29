import {
    Action,
    Dispatch,
} from 'redux';
import { ENTITY_AB_SECTOR } from '@definitions/entity';
import { dispatchFetch } from 'app/fetchApi/netteFetch';

export const changeABCondition =
    (dispatch: Dispatch<Action<string>>, locoNetId: number, state: number) => {
        return dispatchFetch(ENTITY_AB_SECTOR + '/' + locoNetId, dispatch, JSON.stringify({blockCondition: state}));
    };

export const removeABError =
    (dispatch: Dispatch<Action<string>>, locoNetId: number) => {
        return dispatchFetch(ENTITY_AB_SECTOR + '/' + locoNetId, dispatch, JSON.stringify({error: 0}));
    };
