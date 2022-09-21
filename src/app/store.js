import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth';
import flagsReducer from '../features/flags/flags';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        flags: flagsReducer,
    },
});
