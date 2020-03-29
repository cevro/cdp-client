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
import {RequestedTurnoutPosition} from '@definitions/turnouts';
import {
    ActionMessageSend,
    onSendMessage,
} from '../webSocets';

export const changeSector = (
    dispatch: Dispatch<Action<string>>,
    id: number,
    state: number
): ActionMessageSend<{ id: number; state: number }> => {
    return dispatch(onSendMessage({
        method: 'patch',
        uri: ENTITY_SECTOR + '/' + id,
        data: {id, state},
    }));
};

export const changeSignal =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<{ id: number, state: number }> => {
        return dispatch(onSendMessage({
            method: 'patch',
            uri: ENTITY_SIGNAL + '/' + id,
            data: {id, state},
        }));
    };

export const changeTurnout = (
    dispatch: Dispatch<Action<string>>,
    id: number,
    requestedPosition: RequestedTurnoutPosition
):
    ActionMessageSend<{ requestedPosition: RequestedTurnoutPosition }> => {
    return dispatch(onSendMessage({
        method: 'patch',
        uri: ENTITY_TURNOUT + '/' + id,
        data: {
            requestedPosition,
        },
    }));
};

export const changeABDir = (
    dispatch: Dispatch<Action<string>>,
    id: number,
    dir: RequestedTurnoutPosition
): ActionMessageSend<{ id: number, dir: RequestedTurnoutPosition }> => {
    return dispatch(onSendMessage({
        method: 'patch',
        uri: ENTITY_BI_DIR_AB + '/' + id,
        data: {id, dir},
    }));
};