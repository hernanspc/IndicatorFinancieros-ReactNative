import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const authSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        setDataFlag: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setDataFlag } =
    authSlice.actions;
export default authSlice.reducer;
