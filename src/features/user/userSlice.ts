import {createSlice} from "@reduxjs/toolkit";
import {userApi} from "../../api/services/userApi.ts";
import {RootState} from "../../api/store.ts";

interface InitialState {
    isAuthenticated: boolean
    token?: string
}

const initialState: InitialState = {
    isAuthenticated: false
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
                state.token = action.payload.token
                state.isAuthenticated = true
            })
            .addMatcher(userApi.endpoints.getMedia.matchFulfilled, (state) => {
                state.isAuthenticated = true
            })
    },
})

export const {logout} = slice.actions

export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated
