import {createSlice} from "@reduxjs/toolkit";
import {userApi} from "../../api/services/userApi.ts";
import {RootState} from "../../api/store.ts";
import {IFile} from "../../api/types.ts";

interface InitialState {
    files: IFile[]
    isAuthenticated: boolean
    token?: string
}

const initialState: InitialState = {
    files: [],
    isAuthenticated: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
        deleteFiles: (state, action) => {
            state.files.splice(state.files.findIndex((arrow) => arrow.id === action.payload), 1)
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
                state.token = action.payload.token
                state.isAuthenticated = true
            })
            .addMatcher(userApi.endpoints.getMedia.matchFulfilled, (state, action) => {
                state.isAuthenticated = true
                // @ts-ignore
                state.files = action.payload.files
            })
    },
})

export const {logout, deleteFiles} = slice.actions

export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated

export const selectFiles = (state: RootState) => state.auth.files
