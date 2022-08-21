import React, { FC, useState } from 'react'
import { Status } from '../../../types/Status'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './EditStatusPopup.module.scss'

interface EditStatusPopupProps {
	isOpened: boolean
	onClose: () => void
	setUserStatus: (status: Status) => void
	currentStatus: Status
	handleEditStatusSuccess: () => void
	handleEditStatusError: () => void
}

const EditStatusPopup: FC<EditStatusPopupProps> = ({
	isOpened,
	onClose,
	setUserStatus,
	currentStatus,
	handleEditStatusSuccess,
	handleEditStatusError
}) => {
	const [newStatus, setNewStatus] = useState<Status>(currentStatus)

	function handleChange(e: any) {
		setNewStatus(e.target.value)
	}

	function applyNewStatus() {
		setUserStatus(newStatus)
		onClose()
		handleEditStatusSuccess()
	}

	function cancelNewStatus() {
		handleEditStatusError()
		onClose()
	}

	return (
		<Dialog
			id="2"
			isOpened={isOpened}
			onClose={onClose}
			primaryButtonOnClick={applyNewStatus}
			primaryButtonText="Apply changes"
			secondaryButtonOnClick={cancelNewStatus}
			secondaryButtonText="Cancel"
		>
			<p className={styles.header}>Your status: </p>
			<select
				className={styles['status-selector']}
				value={newStatus}
				onChange={e => handleChange(e)}
			>
				{Object.values(Status).map(value => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
		</Dialog>
	)
}

export default EditStatusPopup
