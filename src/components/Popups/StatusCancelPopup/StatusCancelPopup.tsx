import { FC } from 'react'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './StatusCancelPopup.module.scss'

interface StatusCancelPopupProps {
	isOpened: boolean
	onClose: () => void
}

const StatusCancelPopup: FC<StatusCancelPopupProps> = ({
	isOpened,
	onClose
}) => {
	return (
		<Dialog
			id="4"
			isOpened={isOpened}
			onClose={onClose}
			primaryButtonText="Continue"
			primaryButtonOnClick={onClose}
		>
			<p className={styles.message}>🚫 Failed to apply new status!</p>
		</Dialog>
	)
}

export default StatusCancelPopup
