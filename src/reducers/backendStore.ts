import {
    ACTION_CONNECTION_CLOSE,
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import { BackendStore } from 'app/consts/messages';

const dumpRetrieve = (store: BackendStore, action: ActionMessageRetrieve): BackendStore => {
    return action.message.store;
};

export { BackendStore };

const initState: BackendStore = {
    signals: {},
    turnouts: {},
    sectors: {},
    routeBuilder: {
        buffer: [],
    },
};

export const backendStore = (state: BackendStore = initState, action): BackendStore => {
    const {type} = action;
    switch (type) {
        case ACTION_MESSAGE_RETRIEVE:
            return dumpRetrieve(state, action);
        case ACTION_CONNECTION_CLOSE:
            return initState;
        default:
            return state;
    }
};
