import {
    ACTION_FETCH_FAIL,
    ACTION_FETCH_START,
    ACTION_FETCH_SUCCESS,
    ActionFetchFail,
    ActionFetchSuccess,
} from './actions';
import {
    Message,
    FetchResponse,
} from './interfaces';

export interface FetchApiState<> {
    submitting?: boolean;
    error?: Error | any;
    messages: Message[];
    initialLoaded: boolean;
}

const fetchStart = (state: FetchApiState): FetchApiState => {
    return {
        ...state,
        error: null,
        messages: [],
        submitting: true,
    };
};
const fetchFail = (state: FetchApiState, action: ActionFetchFail): FetchApiState => {
    return {
        ...state,
        error: action.error,
        messages: [{
            level: 'danger',
            text: action.error.toString(),
        }],
        submitting: false,
    };
};

function fetchSuccess<D = any>(state: FetchApiState, action: ActionFetchSuccess<FetchResponse<D>>): FetchApiState {
    return {
        ...state,
        initialLoaded: true,
        messages: action.data.messages,
        submitting: false,
    };
}

const initState: FetchApiState = {
    initialLoaded: false,
    messages: [],
};

export function fetchApi<D = any>(state: FetchApiState = initState, action: any): FetchApiState {
    switch (action.type) {
        case ACTION_FETCH_START:
            return fetchStart(state);
        case ACTION_FETCH_FAIL:
            return fetchFail(state, action);
        case ACTION_FETCH_SUCCESS:
            return fetchSuccess<D>(state, action);
        default:
            return state;
    }
}
