import {
    Action,
    Dispatch,
} from 'redux';

import { dispatchFetch } from 'app/fetchApi/netteFetch';
import { BackendRouteLock } from 'app/consts/interfaces/routeLock';
import BuildOptions = BackendRouteLock.BuildOptions;

export const ACTION_SIGNAL_SELECT = 'ACTION_SIGNAL_SELECT';

export interface ActionRouteBuilderSignalSelect extends Action<string> {
    signalUId: string;
}

export interface ActionRouteBuilderSectorSelect extends Action<string> {
    sectorUId: string;
}

export const signalSelect = (signalUId: string): ActionRouteBuilderSignalSelect => {
    return {
        type: ACTION_SIGNAL_SELECT,
        signalUId,
    };
};

export const ACTION_SECTOR_SELECT = 'ACTION_SECTOR_SELECT';
export const sectorSelect = (sectorUId: string): ActionRouteBuilderSectorSelect => {
    return {
        type: ACTION_SECTOR_SELECT,
        sectorUId,
    };
};


export const ACTION_CLEAR_SELECT = 'ACTION_CLEAR_SELECT';
export const clearSelect = (): Action<string> => {
    return {
        type: ACTION_CLEAR_SELECT,
    };
};

export const findRoute = (dispatch: Dispatch<Action<string>>, startSignalUId: string, endSectorUId: string) => {
    return dispatchFetch('route/find', dispatch, JSON.stringify({startSignalUId, endSectorUId}));
};
export const buildRoute = (dispatch: Dispatch<Action<string>>, routeUId: string, buildOptions: BuildOptions) => {
    return dispatchFetch('route/build/' + routeUId, dispatch, JSON.stringify({buildOptions}));
};

