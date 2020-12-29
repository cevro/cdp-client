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
    ENTITY_AB_SECTOR,
    ENTITY_BI_DIR_AB,
    ENTITY_SECTOR,
    ENTITY_SIGNAL,
    ENTITY_TURNOUT,
} from '@definitions/entity';
import { Signal } from 'app/consts/signals/interfaces';

export interface MapObjectState<T> {
    [id: number]: T;
}

interface OS<O = any> {
    [key: string]: MapObjectState<O>
}

export interface ObjectState extends OS {
    [ENTITY_SIGNAL]: MapObjectState<Signal.State>;
    [ENTITY_SECTOR]: MapObjectState<SectorState>;
    [ENTITY_TURNOUT]: MapObjectState<TurnoutState>;
    [ENTITY_AB_SECTOR]: MapObjectState<ABSectorState>;
    [ENTITY_BI_DIR_AB]: MapObjectState<BiDirABState>;

    //   oneDirABs: any;
    // locoNetConnector: LocoNetConnectorState;
}

const dumpRetrieve = (store: ObjectState, action: ActionMessageRetrieve): ObjectState => {
    const {data} = action.message;
    if (data.hasOwnProperty(ENTITY_SIGNAL)) {
        const storeData = {};
        data[ENTITY_SIGNAL].forEach((value) => {
            storeData[value.signalUId] = value;
        });
        store = {
            ...store,
            [ENTITY_SIGNAL]: {
                ...store[ENTITY_SIGNAL],
                ...storeData,
            },
        }

    }

    [ENTITY_SECTOR, ENTITY_TURNOUT, ENTITY_AB_SECTOR, ENTITY_BI_DIR_AB].forEach((entityName: string) => {
        const storeData = {};
        if (data.hasOwnProperty(entityName)) {
            data[entityName].forEach((value) => {
                storeData[value.locoNetId] = value;
            });
            store = {
                ...store,
                [entityName]: storeData,
            }
        }
    });
    return store;
};

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
            return dumpRetrieve(state, action);
        case ACTION_CONNECTION_CLOSE:
            return initState;
        default:
            return state;
    }
};
