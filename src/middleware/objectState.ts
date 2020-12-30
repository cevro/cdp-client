import { Store } from '../reducers';
import { ABSectorState, BiDirABState } from '@definitions/interfaces';
import { ObjectState } from '../reducers/objectState';
import { ENTITY_AB_SECTOR, ENTITY_BI_DIR_AB, ENTITY_SECTOR, ENTITY_SIGNAL, ENTITY_TURNOUT } from '@definitions/entity';
import { BackendSector, BackendSignal, BackendTurnout } from 'app/consts/interfaces';

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

export const getSignalByUId = (store: Store, signalUId: string): BackendSignal.Snapshot => {
    return getEntityByUId(ENTITY_SIGNAL, store, signalUId);
};

export const getTurnoutByUId = (store: Store, turnoutUId: string): BackendTurnout.Snapshot => {
    return getEntityByUId(ENTITY_TURNOUT, store, turnoutUId);
};

export const getSectorByUId = (store: Store, sectorUId: string): BackendSector.Snapshot => {
    return getEntityByUId(ENTITY_SECTOR, store, sectorUId);
};

function getEntityByUId<K extends keyof ObjectState, I extends keyof ObjectState[K]>
(accessKey: K, store: Store, uId: I): ObjectState[K][I] {
    const objects = store.objectState[accessKey];
    let state = undefined;
    for (const id in objects) {
        if (objects.hasOwnProperty(uId)) {
            state = objects[uId];
        }
    }
    return state;
}

export const getABSectorState = (store: Store, sectorId: number): ABSectorState => {
    return getObjectState(ENTITY_AB_SECTOR, store, sectorId);
};

export const getBiDirABState = (store: Store, ABId: number): BiDirABState => {
    return getObjectState(ENTITY_BI_DIR_AB, store, ABId);
};
