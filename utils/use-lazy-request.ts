import {IRequest} from "@/models/i-request";
import {fetcher} from "@/utils/service-swr-util";
import useSWR from "swr";
import {SWRResponse} from "swr/dist/types";

type LazyRequestTuple<V> = [
    (v) => Promise<void>,
    SWRResponse
]

export const useLazyRequest = <T>(
    query: IRequest,
): LazyRequestTuple<T> => {
    const response = useSWR<T>(
        query,
        () => null
    )
    const executeQuery = async (params) => {
        query.params = params;
        const result = await fetcher(query);
        return result;
    }

    return [executeQuery, response]
}