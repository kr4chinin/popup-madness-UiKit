import { useState } from 'react'
import UserPopup from './components/Popups/UserPopup/UserPopup'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'

const App = () => {
	useCreatePortalsDiv()

	const [isOpened, setIsOpened] = useState(false)

	function onClose() {
		setIsOpened(false)
	}

	// const theme = useAppSelector(state => state.themeSliceReducer)

	return (
		<div>
			<button
				onClick={() => {
					setIsOpened(true)
				}}
			>
				Open user pop-up
			</button>
			<UserPopup isOpened={isOpened} onClose={onClose} />
		</div>
	)
}

export default App
