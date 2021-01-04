import {
    ACTION_TOGGLE_SIGNAL_TEXT, ACTION_TOGGLE_TURNOUT_TEXT,
    ToggleSignalAction,
} from '../actions/displayOptions';

export interface displayOptionsState {
    signals: {
        [type in any]?: boolean;
    };
    turnouts: boolean;
}

const toggleSignal = (state: displayOptionsState, action: ToggleSignalAction): displayOptionsState => {
    const {signalType} = action;
    let status = true;
    if (state.signals.hasOwnProperty(signalType)) {
        status = !state.signals[signalType];
    }
    return {
        ...state,
        signals: {
            ...state.signals,
            [signalType]: status,
        },
    };
};

const toggleTurnouts = (state: displayOptionsState): displayOptionsState => {
    return {
        ...state,
        turnouts: !state.turnouts,
    };
};

const initialState: displayOptionsState = {
    signals: {},
    turnouts: false,
};

export const displayOptions = (state: displayOptionsState = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_TOGGLE_SIGNAL_TEXT:
            return toggleSignal(state, action);
        case ACTION_TOGGLE_TURNOUT_TEXT:
            return toggleTurnouts(state);
        default:
            return state;
    }
};
