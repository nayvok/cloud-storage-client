import {$api} from "./api.ts";

export const userApi = $api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{token: string}, {email: string; password: string}>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            }),
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData
            }),
        }),
        logout: builder.mutation({
            query: (userData) => ({
                url: '/logout',
                method: 'POST',
                body: userData
            }),
        }),
        getMedia: builder.query({
            query: () => ({
                url: `/media`,
                method: 'GET'
            }),
        }),
        getMediaById: builder.query({
            query: (id) => ({
                url: `/media/${id}`,
                method: 'GET'
            }),
        }),
        uploadMedia: builder.query({
            query: (mediaData) => ({
                url: `/media`,
                method: 'POST',
                body: mediaData
            }),
        }),
        deleteMediaById: builder.mutation({
            query: (id) => ({
                url: `/media/${id}`,
                method: 'DELETE'
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useGetMediaQuery,
    useLazyGetMediaQuery,
    useGetMediaByIdQuery,
    useLazyGetMediaByIdQuery,
    useDeleteMediaByIdMutation
} = userApi

export const {
    endpoints: {login, register, logout, getMedia, getMediaById, uploadMedia, deleteMediaById}
} = userApi