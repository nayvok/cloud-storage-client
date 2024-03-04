import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../constants.ts";
import {RootState} from "../store.ts";

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token || localStorage.getItem('token')
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers;
    },
})

export const $api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQuery,
    endpoints: () => ({})
})

export default baseQuery;