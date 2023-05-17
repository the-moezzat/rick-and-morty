import { configureStore } from '@reduxjs/toolkit';
import characterApi from './apis/charactersApi';
import drawerReducer from './slices/drawerSlice';

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        [characterApi.reducerPath]: characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './apis/charactersApi';
export * from './slices/drawerSlice';
