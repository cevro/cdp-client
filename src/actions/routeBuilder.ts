import {
    Action,
    Dispatch,
} from 'redux';

import {BuildOptions, RouteFinderRequest} from '@definitions/interfaces';
import {onSendMessage} from './webSocets';
import {Message} from '@definitions/messages';

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
    return dispatch(onSendMessage<RouteFinderRequest>({
        method: 'get',
        uri: 'route',
        data: {
            startSignalId,
            endSectorId,
        },
    }));
};
export const buildRoute = (dispatch: Dispatch<Action<string>>, id: number, buildOptions: BuildOptions) => {
    dispatch(clearSelect());
    return dispatch(onSendMessage({
        method: 'post',
        uri: 'route',
        data: {
            id,
            buildOptions,
        },
    }));
};

