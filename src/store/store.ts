import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './reducers/userSlice'

const rootReducer = combineReducers({
	userSliceReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
