import { combineReducers } from 'redux';
import { messages } from './messages';
import {
    ObjectState,
    objectState,
} from './objectState';
import {
    routeBuilder,
    State as RouteBuilderState,
} from './routeBuilder';
import {
    signalContextMenu,
    State as SignalContextState,
} from './signalContextMenu';
import {
    displayOptions,
    displayOptionsState,
} from './displayOptions';
import { fetchApi, FetchApiState } from '../fetchApi/reducer';

export const app = combineReducers({
    messages,
    fetchApi,
    objectState,
    routeBuilder,
    signalContextMenu,
    displayOptions,
});

export interface Store {
    displayOptions: displayOptionsState;
    objectState: ObjectState;
    signalContextMenu: SignalContextState
    routeBuilder: RouteBuilderState;
    messages: any[];
    fetchApi: FetchApiState;
}
