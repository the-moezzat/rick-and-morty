import { configureStore } from '@reduxjs/toolkit';
import characterApi from './apis/charactersApi';
import characterGraphApi from "./apis/characterGraphApi";
import drawerReducer from './slices/drawerSlice';

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        [characterApi.reducerPath]: characterApi.reducer,
        [characterGraphApi.reducerPath]: characterGraphApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware).concat(characterGraphApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './apis/charactersApi';
export * from './apis/characterGraphApi';
export * from './slices/drawerSlice';
