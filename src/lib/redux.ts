import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/reducer/theme'

interface store {
    mode: string
}

const rootReducer = combineReducers({
    theme: themeReducer,
    // Add other reducers here if needed
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']