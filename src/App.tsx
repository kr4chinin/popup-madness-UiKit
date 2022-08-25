import classNames from 'classnames'
import { useState } from 'react'
import UserPopup from './components/Popups/UserPopup/UserPopup'
import { useAppSelector } from './hooks/redux'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'
import { useThemeActions } from './hooks/useThemeActions'
import styles from './styles/App.module.scss'
import Toggle from './components/Toggle/Toggle'

const App = () => {
	useCreatePortalsDiv()

	const [isOpened, setIsOpened] = useState(false)

	function onClose() {
		setIsOpened(false)
	}

	const theme = useAppSelector(state => state.themeSliceReducer)

	const { toggleTheme } = useThemeActions()

	function handleOpenUser() {
		setIsOpened(true)
	}

	return (
		<div
			className={classNames(styles.container, {
				[`${styles.dark}`]: theme === 'dark'
			})}
		>
			<h1>Pop-up Madness experimantal UiKit</h1>

			<div className={styles.controls}>
				<button className={styles['open-btn']} onClick={handleOpenUser}>
					👥
				</button>
				<a
					href="/"
					className={styles['info-btn']}
					onClick={() => console.log('info')}
				>
					ℹ️
				</a>
				<Toggle isToggled={true} toggle={() => console.log(1)} />
			</div>

			<ul>
				<li>&gt; Click the first button to start exploring</li>
				<li>&gt; Toggle switch to change theme</li>
				<li>&gt; Click the info button to open docs</li>
			</ul>

			<UserPopup isOpened={isOpened} onClose={onClose} />
		</div>
	)
}

export default App
