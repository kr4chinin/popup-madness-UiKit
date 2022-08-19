import { FC } from 'react'
import Portal from '../Portal/Portal'
import styles from './OverlayingPopup.module.scss'

interface OverlayingPopupProps {
	children: React.ReactNode
	onClose: () => void
	isOpened: boolean
	id: string
}

const OverlayingPopup: FC<OverlayingPopupProps> = ({
	children,
	onClose,
	isOpened,
	id
}) => {
	if (!isOpened) {
		return null
	}

	return (
		<Portal onClose={onClose} id={id}>
			<div className={styles.container} role="dialog">
				<div
					className={styles.overlay}
					role="button"
					tabIndex={0}
					onClick={onClose}
				/>
				{children}
			</div>
		</Portal>
	)
}

export default OverlayingPopup
