import {IRequest} from "@/models/i-request";
import {useLazyRequest} from "@/utils/use-lazy-request";
import {METHOD} from "constant/api-contants";
import useSWR from "swr";

export default class BaseService<T, K> {
    get(url, params: T, loading: boolean = true, headers = {}) {
        const args: IRequest = {
            url: url,
            method: METHOD.GET,
            params: params,
            loading: loading,
            headers: headers
        }
        return useSWR<K>(url ? args : null);
    }

    post(url, loading: boolean = true, headers = {}) {
        const args: IRequest = {
            url: url,
            method: METHOD.POST,
            loading: loading,
            headers: headers
        }
        // params: params || {},
        return useLazyRequest<K>(url ? args : null);
    }
}

