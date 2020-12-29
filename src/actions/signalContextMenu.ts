import { Action } from 'redux';

interface SignalCoordinates {
    x: number;
    y: number;
}

export const ACTION_SIGNAL_CONTEXT_MENU_TOGGLE = 'ACTION_SIGNAL_CONTEXT_MENU_TOGGLE';

export interface ActionContextMenu extends Action<string> {
    signalUId: string | null;
    coordinates: SignalCoordinates | null;
}

export const toggleContextMenu = (signalUId: string | null, coordinates: SignalCoordinates | null): ActionContextMenu => {
    return {
        type: ACTION_SIGNAL_CONTEXT_MENU_TOGGLE,
        signalUId: signalUId,
        coordinates,
    };
};
