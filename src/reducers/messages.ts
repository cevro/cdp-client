import { ACTION_FETCH_SUCCESS, ActionFetchSuccess } from 'app/fetchApi/actions';

export interface ResponseMessage {
    message: string;
}

export type State = ResponseMessage[];

const messageRetrieve = (state: State, action: ActionFetchSuccess<any>): State => {
    return [action.data, ...state];
};

export const messages = (state: State = [], action): State => {
    const {type} = action;
    switch (type) {
        case ACTION_FETCH_SUCCESS:
            return messageRetrieve(state, action);
        default:
            return state;
    }
};
