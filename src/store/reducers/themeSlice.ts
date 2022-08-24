import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark'

const initialState: Theme = 'dark'

export const themeSlice = createSlice<Theme, SliceCaseReducers<Theme>, string>({
	name: 'theme',
	initialState,
	reducers: {
		setDarkTheme: (theme: Theme) => {
			theme = 'dark'
		},
		setLightTheme: (theme: Theme) => {
			theme = 'light'
		}
	}
})

export default themeSlice.reducer
