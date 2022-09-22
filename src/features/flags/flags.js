import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    itemSelected: [],
    infoGraph: []
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
        setArrGraph: (state, action) => {
            state.infoGraph = action.payload;
        }
    },
});

export const { setDataFlag, setItemSelected, setArrGraph } =
    authSlice.actions;
export default authSlice.reducer;
