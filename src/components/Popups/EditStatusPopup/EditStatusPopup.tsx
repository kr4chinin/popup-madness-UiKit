import { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import { Status } from '../../../types/Status'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './EditStatusPopup.module.scss'

interface EditStatusPopupProps {
	isOpened: boolean
	onClose: () => void
	handleEditStatusSuccess: () => void
	handleEditStatusError: () => void
}

const EditStatusPopup: FC<EditStatusPopupProps> = ({
	isOpened,
	onClose,
	handleEditStatusSuccess,
	handleEditStatusError
}) => {
	const { status } = useAppSelector(state => state.userSliceReducer)

	const [newStatus, setNewStatus] = useState<Status>(status)

	const { changeStatus } = useUserActions()

	function handleChange(e: any) {
		setNewStatus(e.target.value)
	}

	function applyNewStatus() {
		changeStatus(newStatus)
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
