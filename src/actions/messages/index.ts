import {
    Action,
    Dispatch,
} from 'redux';
import {
    Message, METHOD_TYPE,
} from '@definitions/messages';
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

export function send<T>
(dispatch: Dispatch<Action<string>>, uri: string, method: METHOD_TYPE, data: T): ActionMessageSend<Message<T>> {
    return dispatch(onSendMessage({
        method,
        uri,
        data,
    }));
}

export const changeSector =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<Message<{ id: number; state: number }>> => {
        return send<{ id: number; state: number }>
        (dispatch, ENTITY_SECTOR + '/' + id, 'patch', {id, state});
    };

export const changeSignal =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<Message<{ id: number, state: number }>> => {
        return dispatch(onSendMessage({
            method: 'patch',
            uri: ENTITY_SIGNAL + '/' + id,
            data: {id, state},
        }));
    };

export const changeTurnout =
    (dispatch: Dispatch<Action<string>>, id: number, requestedPosition: RequestedTurnoutPosition):
        ActionMessageSend<Message<{ requestedPosition: RequestedTurnoutPosition }>> => {
        return dispatch(onSendMessage({
            method: 'patch',
            uri: ENTITY_TURNOUT + '/' + id,
            data: {
                requestedPosition,
            },
        }));
    };

export const changeABDir =
    (dispatch: Dispatch<Action<string>>, id: number, dir: -1 | 1): ActionMessageSend<Message<{ id: number, dir: -1 | 1 }>> => {
        return dispatch(onSendMessage({
            method: 'patch',
            uri: ENTITY_BI_DIR_AB + '/' + id,
            data: {id, dir},
        }));
    };