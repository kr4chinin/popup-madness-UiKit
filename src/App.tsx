import classNames from 'classnames'
import { useState } from 'react'
import UserPopup from './components/Popups/UserPopup/UserPopup'
import { useAppSelector } from './hooks/redux'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'
import { useThemeActions } from './hooks/useThemeActions'
import styles from './styles/App.module.scss'

const App = () => {
	useCreatePortalsDiv()

	const [isOpened, setIsOpened] = useState(false)

	function onClose() {
		setIsOpened(false)
	}

	const theme = useAppSelector(state => state.themeSliceReducer)

	const { toggleTheme } = useThemeActions()

	return (
		<div
			className={classNames(styles.container, {
				[`${styles.dark}`]: theme === 'dark'
			})}
		>
			<button
				onClick={() => {
					setIsOpened(true)
				}}
			>
				Open user pop-up
			</button>

			<button onClick={() => toggleTheme()}>Toggle theme</button>

			<UserPopup isOpened={isOpened} onClose={onClose} />
		</div>
	)
}

export default App
