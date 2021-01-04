import { combineReducers } from 'redux';
import { messages, State as MessagesState } from './messages';
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
import { BackendStore, backendStore } from 'app/reducers/backendStore';

export const app = combineReducers<Store>({
    messages,
    backendStore,
    fetchApi,
    displayOptions,
    routeBuilder,
    signalContextMenu,
});

export interface Store {
    messages: MessagesState;
    backendStore: BackendStore;
    fetchApi: FetchApiState;
    displayOptions: displayOptionsState;
    routeBuilder: RouteBuilderState;
    signalContextMenu: SignalContextState;
}
