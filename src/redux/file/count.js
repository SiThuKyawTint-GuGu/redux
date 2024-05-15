import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

const countOperation = createSlice({
    name: "count",
    initialState,
    reducers: {
        addCount: (state, action) => {
            state.count = state.count + 1
        },
        minusCount: (state, action) => {
            state.count = state.count - 1
        }
    }
})

export const { addCount, minusCount } = countOperation.actions;

export default countOperation.reducer;