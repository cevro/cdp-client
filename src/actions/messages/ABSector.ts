import {
    Action,
    Dispatch,
} from 'redux';
import {
    ActionMessageSend,
    onSendMessage,
} from '../webSocets';
import {ENTITY_AB_SECTOR} from '@definitions/entity';

export const changeABCondition =
    (dispatch: Dispatch<Action<string>>, locoNetId: number, state: number):
        ActionMessageSend => {
        return dispatch(onSendMessage({
            method: 'patch',
            uri: ENTITY_AB_SECTOR + '/' + locoNetId,
            data: {blockCondition: state},
        }));
    };

export const removeABError =
    (dispatch: Dispatch<Action<string>>, locoNetId: number):
        ActionMessageSend=> {
        return dispatch(onSendMessage({
            method: 'patch',
            uri: ENTITY_AB_SECTOR + '/' + locoNetId,
            data: {error: 0},
        }));
    };