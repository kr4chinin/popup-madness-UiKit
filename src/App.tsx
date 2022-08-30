import classNames from 'classnames'
import { useState } from 'react'
import UserPopup from './components/Popups/UserPopup/UserPopup'
import { useAppSelector } from './hooks/redux'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'
import { useThemeActions } from './hooks/useThemeActions'
import styles from './styles/App.module.scss'
import Toggle from './components/Toggle/Toggle'
import { ReactComponent as Profile } from './assets/images/profile.svg'
import { ReactComponent as Info } from './assets/images/info.svg'

const App = () => {
	useCreatePortalsDiv()

	const [isOpened, setIsOpened] = useState(false)
	const [isThemeToggled, setIsThemeToggled] = useState(false)

	const theme = useAppSelector(state => state.themeSliceReducer)
	const { toggleTheme } = useThemeActions()

	function handleToggle() {
		setIsThemeToggled(prev => !prev)
		toggleTheme()
	}

	function handleOpenUser() {
		setIsOpened(true)
	}

	function onClose() {
		setIsOpened(false)
	}

	return (
		<div
			className={classNames(styles.container, {
				[`${styles.dark}`]: theme === 'dark'
			})}
		>
			<h1 className={styles.header}>Pop-up Madness experimantal UiKit</h1>

			<div className={styles.controls}>
				<button className={styles['open-btn']} onClick={handleOpenUser}>
					<Profile />
				</button>
				<a
					href="https://github.com/kr4chinin/popup-madness-UiKit"
					className={styles['info-btn']}
					onClick={() => console.log('info')}
				>
					<Info />
				</a>
				<Toggle isToggled={isThemeToggled} toggle={handleToggle} />
			</div>

			<ul>
				<li>&gt; Click on the first button to start exploring</li>
				<li>&gt; Flip the switch to change app theme</li>
				<li>&gt; Click on the info button to open the docs</li>
			</ul>

			<UserPopup isOpened={isOpened} onClose={onClose} />
		</div>
	)
}

export default App
