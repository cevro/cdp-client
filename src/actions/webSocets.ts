import { Message } from '@definitions/messages';
import { Action } from 'redux';

export const ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';

export interface ActionMessageRetrieve<D = any> extends Action<string> {
    message: Message<D>;
}

export function onMessageRetrieve<D = any>(message: Message<D>): ActionMessageRetrieve<D> {
    return {
        type: ACTION_MESSAGE_RETRIEVE,
        message,
    };
}

export const ACTION_CONNECTION_CLOSE = 'ACTION_CONNECTION_CLOSE';
export const connectionClose = (): Action<string> => {
    return {
        type: ACTION_CONNECTION_CLOSE,
    };
};

export const ACTION_SEND_SUCCESS = 'ACTION_SEND_SUCCESS';
