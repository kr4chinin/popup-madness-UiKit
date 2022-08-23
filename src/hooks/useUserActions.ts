import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { userSlice } from '../store/reducers/userSlice'

export const useUserActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(userSlice.actions, dispatch)
}
