import {
    ACTION_CLEAR_SELECT,
    ACTION_SECTOR_SELECT,
    ACTION_SIGNAL_SELECT,
    ActionRouteBuilderSectorSelect, ActionRouteBuilderSignalSelect,
} from '../actions/routeBuilder';
import {
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';

export interface State {
    startSignalUId: string;
    endSectorUId: string;
    availableRoutes: any[];
}

const initState: State = {
    startSignalUId: null,
    endSectorUId: null,
    availableRoutes: [],
};

const signalSelect = (state: State, action: ActionRouteBuilderSignalSelect): State => {
    return {
        ...state,
        startSignalUId: action.signalUId,
        endSectorUId: null,
        availableRoutes: [],
    };
};
const sectorSelect = (state: State, action: ActionRouteBuilderSectorSelect): State => {
    if (state.startSignalUId === null) {
        return state;
    }
    return {
        ...state,
        endSectorUId: action.sectorUId,
    };
};

const clearSelect = (state: State): State => {
    return {
        ...state,
        startSignalUId: null,
        endSectorUId: null,
        availableRoutes: [],
    };
};

export const routeBuilder = (state: State = initState, action): State => {
    const {type} = action;
    switch (type) {
        case ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        case ACTION_SECTOR_SELECT:
            return sectorSelect(state, action);
        case ACTION_CLEAR_SELECT:
            return clearSelect(state);
        default:
            return state;
    }
};
