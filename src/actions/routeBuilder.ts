import {
    Action,
    Dispatch,
} from 'redux';

import { BuildOptions } from '@definitions/interfaces';
import { dispatchFetch } from 'app/fetchApi/netteFetch';

export const ACTION_SIGNAL_SELECT = 'ACTION_SIGNAL_SELECT';

export interface ActionRouteBuilderSelect extends Action<string> {
    id: number;
}

export const signalSelect = (id: number): ActionRouteBuilderSelect => {
    return {
        type: ACTION_SIGNAL_SELECT,
        id,
    };
};

export const ACTION_SECTOR_SELECT = 'ACTION_SECTOR_SELECT';
export const sectorSelect = (id: number): ActionRouteBuilderSelect => {
    return {
        type: ACTION_SECTOR_SELECT,
        id,
    };
};


export const ACTION_CLEAR_SELECT = 'ACTION_CLEAR_SELECT';
export const clearSelect = (): Action<string> => {
    return {
        type: ACTION_CLEAR_SELECT,
    };
};

export const findRoute = (dispatch: Dispatch<Action<string>>, startSignalId: number, endSectorId: number) => {
    return dispatchFetch('route/find', dispatch, JSON.stringify({startSignalId, endSectorId}));
};
export const buildRoute = (dispatch: Dispatch<Action<string>>, id: number, buildOptions: BuildOptions) => {
    return dispatchFetch('route/build', dispatch, JSON.stringify({id, buildOptions}));
};

