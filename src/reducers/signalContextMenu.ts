import {
    ACTION_SIGNAL_CONTEXT_MENU_TOGGLE, ActionContextMenu,
} from '../actions/signalContextMenu';

export interface State {
    signalUId: string | null;
    coordinates: {
        x: number;
        y: number;
    } | null;
}

const contextMenuDisplay = (state: State, action: ActionContextMenu): State => {
    const {signalUId, coordinates} = action;
    return {
        signalUId,
        coordinates,
    };
};
const initState: State = {
    signalUId: null,
    coordinates: null,
};

export const signalContextMenu = (state: State = initState, action): State => {
    const {type} = action;
    switch (type) {
        case ACTION_SIGNAL_CONTEXT_MENU_TOGGLE:
            return contextMenuDisplay(state, action);
        default:
            return state;
    }
};
