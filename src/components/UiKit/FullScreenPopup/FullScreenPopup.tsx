import classNames from 'classnames'
import { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import Portal from '../Portal/Portal'
import styles from './FullScreenPopup.module.scss'

interface FullScreenPopupProps {
	children: React.ReactNode
	isOpened: boolean
	onClose: () => void
	id: string
	title: string
}

const FullScreenPopup: FC<FullScreenPopupProps> = ({
	children,
	isOpened,
	onClose,
	id,
	title
}) => {
	const theme = useAppSelector(state => state.themeSliceReducer)

	if (!isOpened) {
		return null
	}

	return (
		<Portal onClose={onClose} id={id}>
			<div
				className={classNames(styles.popup, {
					[`${styles.dark}`]: theme === 'dark'
				})}
			>
				<div
					className={classNames(styles.navbar, {
						[`${styles.dark}`]: theme === 'dark'
					})}
				>
					<button
						className={classNames(styles['close-container'], {
							[`${styles.dark}`]: theme === 'dark'
						})}
						onClick={onClose}
					>
						<p>&#10005;</p>
					</button>
					<p className={styles['page-title']}>{title}</p>
				</div>
				{children}
			</div>
		</Portal>
	)
}

export default FullScreenPopup
