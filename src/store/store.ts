import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './reducers/userSlice'
import themeSliceReducer from './reducers/themeSlice'

const rootReducer = combineReducers({
	userSliceReducer,
	themeSliceReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
