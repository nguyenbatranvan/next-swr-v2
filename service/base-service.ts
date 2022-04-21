import {IRequest} from "@/models/i-request";
import {METHOD} from "constant/api-contants";
import useSWR from "swr";

export default class BaseService <T,K>{
    get(url, params:T, loading: boolean = true, headers = {}) {
        const args: IRequest = {
            url: url,
            method: METHOD.GET,
            params: params,
            loading: loading,
            headers: headers
        }
        return useSWR<K>(url ? args : null);
    }

    post(url, params:K, loading: boolean = true, headers = {}) {
        const args: IRequest = {
            url: url,
            method: METHOD.POST,
            params: params,
            loading: loading,
            headers: headers
        }
        return useSWR<K>(url ? args : null);
    }
}

