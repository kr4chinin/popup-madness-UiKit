import classNames from 'classnames'
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

	const theme = useAppSelector(state => state.themeSliceReducer)

	const [isChangeInfoOpen, setIsChangeInfoOpen] = useState({
		success: false,
		cancel: false
	})

	function handleChange(e: any) {
		setNewStatus(e.target.value)
	}

	function handleApproveChange() {
		handleOpenChangeInfoSuccess()
		onClose()
		changeStatus(newStatus)
	}
	function handleCancelChange() {
		handleOpenChangeInfoCancel()
		setNewStatus(status)
		onClose()
	}

	function handleCloseChangeInfoSuccess() {
		setIsChangeInfoOpen(prev => {
			return {
				...prev,
				success: false
			}
		})
	}
	function handleOpenChangeInfoSuccess() {
		setIsChangeInfoOpen(prev => {
			return {
				...prev,
				success: true
			}
		})
	}

	function handleCloseChangeInfoCancel() {
		setIsChangeInfoOpen(prev => {
			return {
				...prev,
				cancel: false
			}
		})
	}
	function handleOpenChangeInfoCancel() {
		setIsChangeInfoOpen(prev => {
			return {
				...prev,
				cancel: true
			}
		})
	}
	return (
		<>
			<Dialog
				id="2"
				isOpened={isOpened}
				onClose={onClose}
				primaryButtonOnClick={handleApproveChange}
				primaryButtonText="Apply changes"
				secondaryButtonOnClick={handleCancelChange}
				secondaryButtonText="Cancel"
			>
				<p
					className={classNames(styles.header, {
						[`${styles.dark}`]: theme === 'dark'
					})}
				>
					Your status:{' '}
				</p>
				<select
					className={classNames(styles['status-selector'], {
						[`${styles.dark}`]: theme === 'dark'
					})}
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
				isOpened={isChangeInfoOpen.success}
				onClose={handleCloseChangeInfoSuccess}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseChangeInfoSuccess}
			>
				<p className={styles.message}>✅ New status applied successfully!</p>
			</Dialog>

			<Dialog
				id="4"
				isOpened={isChangeInfoOpen.cancel}
				onClose={handleCloseChangeInfoCancel}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseChangeInfoCancel}
			>
				<p className={styles.message}>🚫 Failed to apply new status!</p>
			</Dialog>
		</>
	)
}

export default ChangeStatusPopup
