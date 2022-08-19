import { FC } from 'react'
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup'
import styles from './Dialog.module.scss'

interface DialogProps {
	isOpened: boolean
	onClose: () => void
	text: string
	primaryButtonText: string
	primaryButtonOnClick: () => void
	secondaryButtonText?: string
	secondaryButtonOnClick?: () => void
	id: string
}

const Dialog: FC<DialogProps> = ({
	isOpened,
	onClose,
	text,
	primaryButtonText,
	primaryButtonOnClick,
	secondaryButtonText,
	secondaryButtonOnClick,
	id
}) => {
	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={id}>
			<div className={styles.container}>
				<p className={styles.message}>{text}</p>
				<div className={styles['btns-container']}>
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
		</OverlayingPopup>
	)
}

export default Dialog
