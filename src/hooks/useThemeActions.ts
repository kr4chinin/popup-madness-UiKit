import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { themeSlice } from '../store/reducers/themeSlice'

export const useThemeActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(themeSlice.actions, dispatch)
}
