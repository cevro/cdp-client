import { Action } from 'redux';
import { BackendSignal } from 'app/consts/interfaces';

export interface ToggleSignalAction extends Action<string> {
    signalType: BackendSignal.Type;
}

export const ACTION_TOGGLE_SIGNAL_TEXT = 'ACTION_TOGGLE_SIGNAL_TEXT';
export const toggleSignalText = (signalType: BackendSignal.Type): ToggleSignalAction => {
    return {
        type: ACTION_TOGGLE_SIGNAL_TEXT,
        signalType,
    };
};

export const ACTION_TOGGLE_POINT_TEXT = 'ACTION_TOGGLE_POINT_TEXT';
export const toggleTurnoutText = (): Action<string> => {
    return {
        type: ACTION_TOGGLE_POINT_TEXT,
    };
};
