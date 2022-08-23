import { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import { Status } from '../../../types/Status'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './EditStatusPopup.module.scss'

interface EditStatusPopupProps {
	isOpened: boolean
	onClose: () => void
}

const EditStatusPopup: FC<EditStatusPopupProps> = ({ isOpened, onClose }) => {
	const { status } = useAppSelector(state => state.userSliceReducer)
	const { changeStatus } = useUserActions()

	const [newStatus, setNewStatus] = useState<Status>(status)

	function handleChange(e: any) {
		setNewStatus(e.target.value)
	}

	function applyNewStatus() {
		changeStatus(newStatus)
		handleEditStatusSuccess()
		onClose()
	}

	function cancelNewStatus() {
		handleEditStatusError()
		onClose()
	}

	const [editStatusSuccess, setEditStatusSuccess] = useState(false)
	const [editStatusError, setEditStatusError] = useState(false)

	function handleCloseStatusSuccess() {
		setEditStatusSuccess(false)
	}
	function handleCloseStatusError() {
		setEditStatusError(false)
	}

	function handleEditStatusSuccess() {
		setEditStatusSuccess(true)
	}
	function handleEditStatusError() {
		setEditStatusError(true)
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
				isOpened={editStatusSuccess}
				onClose={handleCloseStatusSuccess}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseStatusSuccess}
			>
				<p className={styles.message}>✅ New status applied successfully!</p>
			</Dialog>

			<Dialog
				id="4"
				isOpened={editStatusError}
				onClose={handleCloseStatusError}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseStatusError}
			>
				<p className={styles.message}>🚫 Failed to apply new status!</p>
			</Dialog>
		</>
	)
}

export default EditStatusPopup
