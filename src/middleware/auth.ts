import { createListenerMiddleware } from "@reduxjs/toolkit"
import {userApi} from "../api/services/userApi.ts";


export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: userApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        if (action.payload.token) {
            localStorage.setItem("token", action.payload.token)
        }
    },
})