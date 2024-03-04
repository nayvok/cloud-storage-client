import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../api/store.ts";

interface InitialState {
    fileIds: string[],
    isSelected: boolean
}

const initialState: InitialState = {
    fileIds: [],
    isSelected: false
}

const slice = createSlice({
    name: "selecto",
    initialState,
    reducers: {
        addFileId: (state, action) => {
            state.fileIds.push(action.payload)
        },
        removeFileId: (state, action) => {
            state.fileIds = state.fileIds.filter((id) => id !== action.payload)
        },
    },
})

export const {addFileId, removeFileId} = slice.actions

export default slice.reducer

export const selectFileIds = (state: RootState) =>
    state.selecto.fileIds