import {
    ACTION_CONNECTION_CLOSE,
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import {
    ABSectorState,
    BiDirABState,
    SectorState,
    TurnoutState,
} from '@definitions/interfaces';

import {
    Message,
} from '@definitions/messages';
import {
    ENTITY_AB_SECTOR,
    ENTITY_BI_DIR_AB,
    ENTITY_SECTOR,
    ENTITY_SIGNAL,
    ENTITY_TURNOUT,
} from '@definitions/entity';
import {SignalState} from "@app/consts/signals/interfaces";

export interface SignalsState {
    [id: number]: SignalState;
}

export interface SectorsState {
    [id: number]: SectorState;
}

export interface TurnoutsState {
    [id: number]: TurnoutState;
}

export interface ABSectorsState {
    [locoNetId: number]: ABSectorState;
}

export interface BiDirABsState {
    [locoNetId: number]: BiDirABState;
}

export interface LocoNetConnectorState {
    availablePorts: string[];
    status: number;
    port: string;
}

interface OS<O extends { locoNetId: number } = { locoNetId: number }> {
    [key: string]: {
        [locoNetId: number]: O;
    }
}

export interface ObjectState extends OS {
    [ENTITY_SIGNAL]: SignalsState;
    [ENTITY_SECTOR]: SectorsState;
    [ENTITY_TURNOUT]: TurnoutsState;
    [ENTITY_AB_SECTOR]: ABSectorsState;
    [ENTITY_BI_DIR_AB]: BiDirABsState;

    //   oneDirABs: any;
    // locoNetConnector: LocoNetConnectorState;
}

const messageRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<any>>): ObjectState => {
    const {uri, method} = action.message;
    if (method === 'patch') {

        switch (action.message.uri) {
            case '/':
                return dumpRetrieve(store, action);
        }
        const match = uri.match(/([a-zA-Z_]+)\/([0-9]+)/);
        return objectRetrieve(+match[2], match[1], store, action);
    }
    return store;

};
const dumpRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<any>>): ObjectState => {
    const {data} = action.message;
    [ENTITY_SECTOR, ENTITY_SIGNAL, ENTITY_TURNOUT, ENTITY_AB_SECTOR, ENTITY_BI_DIR_AB].forEach((entityName: string) => {
        const storeData = {};
        data[entityName].forEach((value) => {
            storeData[value.locoNetId] = value;
        });
        store = {
            ...store,
            [entityName]: storeData,
        }
    });
    return store;
};

function objectRetrieve<K extends keyof ObjectState, I extends keyof ObjectState[K], T extends ObjectState[K][I]>
(id: number, accessKey: K, store: ObjectState, action: ActionMessageRetrieve<Message<T>>): ObjectState {

    const {data} = action.message;
    return {
        ...store,
        [accessKey]: {
            ...store[accessKey],
            [+id]: data,
        },
    };
}

const initState: ObjectState = {
    [ENTITY_SIGNAL]: {},
    [ENTITY_SECTOR]: {},
    [ENTITY_TURNOUT]: {},
    [ENTITY_AB_SECTOR]: {},
    [ENTITY_BI_DIR_AB]: {},
};

export const objectState = (state: ObjectState = initState, action): ObjectState => {
    const {type} = action;
    switch (type) {
        case ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        case ACTION_CONNECTION_CLOSE:
            return initState;
        default:
            return state;
    }
};
