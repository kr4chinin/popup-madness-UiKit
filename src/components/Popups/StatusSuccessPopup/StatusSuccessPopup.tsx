import { FC, useState } from 'react'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './StatusSuccessPopup.module.scss'

interface StatusSuccessPopupProps {
	isOpened: boolean
	onClose: () => void
}

const StatusSuccessPopup: FC<StatusSuccessPopupProps> = ({
	isOpened,
	onClose
}) => {
	return (
		<Dialog
			id="3"
			isOpened={isOpened}
			onClose={onClose}
			primaryButtonText="Continue"
			primaryButtonOnClick={onClose}
		>
			<p className={styles.message}>✅ New status applied successfully!</p>
		</Dialog>
	)
}

export default StatusSuccessPopup
