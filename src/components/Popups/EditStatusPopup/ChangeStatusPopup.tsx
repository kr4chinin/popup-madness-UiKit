import { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import { Status } from '../../../types/Status'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './ChangeStatusPopup.module.scss'

interface ChangeStatusPopupProps {
	isOpened: boolean
	onClose: () => void
}

const ChangeStatusPopup: FC<ChangeStatusPopupProps> = ({
	isOpened,
	onClose
}) => {
	const { status } = useAppSelector(state => state.userSliceReducer)
	const { changeStatus } = useUserActions()

	const [newStatus, setNewStatus] = useState<Status>(status)

	const [isStatusChanged, setIsStatusChanged] = useState({
		success: false,
		cancel: false
	})

	function handleChange(e: any) {
		setNewStatus(e.target.value)
	}

	function applyNewStatus() {
		changeStatus(newStatus)
		handleOpenChangeStatusSuccess()
		onClose()
	}
	function cancelNewStatus() {
		handleOpenChangeStatusError()
		onClose()
	}

	function handleOpenChangeStatusSuccess() {
		setIsStatusChanged(prev => {
			return { ...prev, success: true }
		})
	}
	function handleCloseChangeStatusSuccess() {
		setIsStatusChanged(prev => {
			return { ...prev, success: false }
		})
	}

	function handleOpenChangeStatusError() {
		setIsStatusChanged(prev => {
			return { ...prev, cancel: true }
		})
	}
	function handleCloseChangeStatusError() {
		setIsStatusChanged(prev => {
			return { ...prev, cancel: false }
		})
	}

	return (
		<>
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

			<Dialog
				id="3"
				isOpened={isStatusChanged.success}
				onClose={handleCloseChangeStatusSuccess}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseChangeStatusSuccess}
			>
				<p className={styles.message}>✅ New status applied successfully!</p>
			</Dialog>

			<Dialog
				id="4"
				isOpened={isStatusChanged.cancel}
				onClose={handleCloseChangeStatusError}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseChangeStatusError}
			>
				<p className={styles.message}>🚫 Failed to apply new status!</p>
			</Dialog>
		</>
	)
}

export default ChangeStatusPopup
