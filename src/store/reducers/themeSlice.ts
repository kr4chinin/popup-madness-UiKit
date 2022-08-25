import { createSlice } from '@reduxjs/toolkit'

enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState: Theme.LIGHT as Theme,
	reducers: {
		toggleTheme: (theme: Theme) => {
			return theme === Theme.LIGHT
				? (theme = Theme.DARK)
				: (theme = Theme.LIGHT)
		}
	}
})

export default themeSlice.reducer
