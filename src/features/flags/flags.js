import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    itemSelected: []
};

const authSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        setDataFlag: (state, action) => {
            state.data = action.payload;
        },
        setItemSelected: (state, action) => {
            state.itemSelected = action.payload;
        },
    },
});

export const { setDataFlag, setItemSelected } =
    authSlice.actions;
export default authSlice.reducer;
