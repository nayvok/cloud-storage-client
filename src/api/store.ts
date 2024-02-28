import type {Action, ThunkAction} from "@reduxjs/toolkit"
import {configureStore} from "@reduxjs/toolkit"
import {$api} from "./services/api.ts";
import auth from '../features/user/userSlice.ts'
import {listenerMiddleware} from "../middleware/auth.ts";

export const store = configureStore({
    reducer: {
        [$api.reducerPath]: $api.reducer,
        auth,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat($api.middleware)
            .prepend(listenerMiddleware.middleware)
    }
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>