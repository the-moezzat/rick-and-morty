import { configureStore } from '@reduxjs/toolkit';
import characterApi from './apis/charactersApi';

export const store = configureStore({
    reducer: {
        [characterApi.reducerPath]: characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './apis/charactersApi';
