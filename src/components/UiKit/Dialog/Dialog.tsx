import classNames from 'classnames'
import { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import EnterListener from '../../KeyboardListeners/EnterListener'
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup'
import styles from './Dialog.module.scss'

interface DialogProps {
	isOpened: boolean
	onClose: () => void
	primaryButtonText: string
	primaryButtonOnClick: () => void
	secondaryButtonText?: string
	secondaryButtonOnClick?: () => void
	id: string
	children: React.ReactNode
}

const Dialog: FC<DialogProps> = ({
	isOpened,
	onClose,
	primaryButtonText,
	primaryButtonOnClick,
	secondaryButtonText,
	secondaryButtonOnClick,
	id,
	children
}) => {
	const theme = useAppSelector(state => state.themeSliceReducer)

	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={id}>
			<EnterListener func={primaryButtonOnClick}>
				<div
					className={classNames(styles.container, {
						[`${styles.dark}`]: theme === 'dark'
					})}
				>
					<div className={styles.body}>{children}</div>
					<div
						className={classNames(
							styles['btns-container'],
							!secondaryButtonOnClick && styles['one-btn']
						)}
					>
						<button
							hidden={!!!secondaryButtonOnClick && !!!secondaryButtonText}
							onClick={secondaryButtonOnClick}
							className={styles['secondary-btn']}
						>
							{secondaryButtonText}
						</button>
						<button
							onClick={primaryButtonOnClick}
							className={styles['primary-btn']}
						>
							{primaryButtonText}
						</button>
					</div>
				</div>
			</EnterListener>
		</OverlayingPopup>
	)
}

export default Dialog
