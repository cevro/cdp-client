import { Store } from '../reducers';
import { ABSectorState, BiDirABState, SectorState, TurnoutState } from '@definitions/interfaces';
import { ObjectState } from '../reducers/objectState';
import { ENTITY_AB_SECTOR, ENTITY_BI_DIR_AB, ENTITY_SECTOR, ENTITY_SIGNAL, ENTITY_TURNOUT } from '@definitions/entity';
import { Signal } from 'app/consts/signals/interfaces';

function getObjectState<K extends keyof ObjectState, I extends keyof ObjectState[K]>
(accessKey: K, store: Store, locoNetId: I): ObjectState[K][I] {
    const objects = store.objectState[accessKey];
    let state = undefined;
    for (const id in objects) {
        if (objects.hasOwnProperty(id)) {
            if (+id === locoNetId) {
                state = objects[id];
            }
        }
    }
    return state;
}

export const getSignalByUid = (store: Store, signalUId: string): Signal.State => {
    const objects = store.objectState[ENTITY_SIGNAL];
    let state = undefined;
    for (const id in objects) {
        if (objects.hasOwnProperty(signalUId)) {
            state = objects[signalUId];
        }
    }
    return state;
};

export const getSectorState = (store: Store, sectorId: number): SectorState => {
    return getObjectState(ENTITY_SECTOR, store, sectorId);
};

export const getTurnoutState = (store: Store, pointId: number): TurnoutState => {
    return getObjectState(ENTITY_TURNOUT, store, pointId);
};

export const getABSectorState = (store: Store, sectorId: number): ABSectorState => {
    return getObjectState(ENTITY_AB_SECTOR, store, sectorId);
};

export const getBiDirABState = (store: Store, ABId: number): BiDirABState => {
    return getObjectState(ENTITY_BI_DIR_AB, store, ABId);
};
