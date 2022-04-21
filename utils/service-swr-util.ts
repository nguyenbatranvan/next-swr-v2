import {IRequest} from "@/models/i-request";
import {METHOD} from "constant/api-contants";
import {useSWRConfig} from "swr";

/**
 * parser json to string ...&...
 * */
function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

/**
 * @param args:IRequest
 * fetcher run api useSwr
 * */

export async function fetcher(args: IRequest) {
    let url = args.url;
    const init: RequestInit = {
        method: args.method,
        headers: args.headers
    }
    if (args.method === METHOD.POST) {
        init.body = JSON.stringify(args.params);
    }
    const res = await fetch(url, init);
    if (!res.ok) {
        let error = null;
        if (res.status === 404) {
            error = new Error('An error occurred while fetching the data.')
        }
        console.log('err', error)
        throw error;
    }
    const data = await res.json();
    return data;
}

/**
 * @param key:IRequest
 * middleware add header every api use swr
 * use in _app.tsx for configValue SWR
 * */
export function middleWareHeaders(useSWRNext) {
    return (key, fetcher, config) => {
        const serializedKey: IRequest = Array.isArray(key) ? JSON.stringify(key) : key;
        if (serializedKey) {
            let {url, params, method, loading} = serializedKey;
            if (loading) {
                // todo show loading or...
            }
            if (method === METHOD.GET && Object.keys(params).length) {
                url = url + '?' + objToQueryString(params);
                serializedKey.url = url;
            }
            return useSWRNext(url, (k) => {
                serializedKey.headers = {...serializedKey.headers, authenticated: '111'};
                return fetcher(serializedKey);
            }, config)
        }
        return useSWRNext(null, (k) => {
            serializedKey.headers = {...serializedKey.headers, authenticated: '111'};
        }, config)
    }
}

/**
 * function clear cache api by matcher
 * @param matcher:string
 * @example {
 *     const match= useMatchMutate();
 *     match('api/product');
 *     // cache of swr will clear key match with 'api/product' and reload fetch
 * }
 * */
export function useMatchMutate() {
    const {cache, mutate} = useSWRConfig()
    return (matcher, ...args) => {
        if (!(cache instanceof Map)) {
            throw new Error('matchMutate requires the cache provider to be a Map instance')
        }
        const keys = [];
        for (const [key] of cache.entries()) {
            if (key.match(matcher)) {
                keys.push(key)
            }
        }
        const mutations = keys.map((key) => mutate(key, ...args))
        return Promise.all(mutations)
    }
}