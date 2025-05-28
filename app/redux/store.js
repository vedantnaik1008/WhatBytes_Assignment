import { configureStore } from '@reduxjs/toolkit';
import addItems from '../redux/reducers/addItems';
import formClick from '../redux/reducers/formClick';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

export function createPersistStore() {
    const isServer = typeof window === 'undefined';
    // Returns noop (dymmy) storage
    if (isServer) {
        return {
            getItem() {
                return Promise.resolve(null);
            },
            setItem() {
                return Promise.resolve();
            },
            removeItem() {
                return Promise.resolve();
            }
        };
    }
    return createWebStorage('local');
}

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createPersistStore();

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, addItems);
const persistedReducerForm = persistReducer(persistConfig, formClick);
export const store = configureStore({
    reducer: { addToCart: persistedReducer, form: persistedReducerForm },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});

export let persistor = persistStore(store);
