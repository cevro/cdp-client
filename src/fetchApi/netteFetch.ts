import { fetchFail, fetchStart, fetchSuccess } from './actions';
import { FetchResponse } from './interfaces';
import { Action, Dispatch } from 'redux';

export async function dispatchFetch<ResponseData>(
    url: string,
    dispatch: Dispatch<Action<string>>,
    data: BodyInit | null,
): Promise<FetchResponse<any> | void> {
    dispatch(fetchStart());
    return fetch('http://localhost:8082/' + url, {
        body: data,
        method: 'POST',
    })
        .then((response) => {
            if (response.redirected) {
                window.location.href = response.url;
                throw new Error();
            }
            return response.json();
        })
        .then((d: string) => {
            const parsedResponse = JSON.parse(d);
            dispatch(fetchSuccess<any>(parsedResponse));
            return parsedResponse;
        }).catch((e: Error | any) => {
            dispatch(fetchFail(e));
        });
}
