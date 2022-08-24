import React, { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import Dialog from '../../UiKit/Dialog/Dialog'
import styles from './ChangeBioPopup.module.scss'

interface ChangeBioPopupProps {
	isOpened: boolean
	onClose: () => void
}

const ChangeBioPopup: FC<ChangeBioPopupProps> = ({ isOpened, onClose }) => {
	const { bio } = useAppSelector(state => state.userSliceReducer)
	const { changeBio } = useUserActions()

	const [newBio, setNewBio] = useState(bio)

	const [isChangeInfoOpen, setIsChangeInfoOpen] = useState({
		success: false,
		cancel: false
	})

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setNewBio(e.target.value)
	}

	function handleApproveChange() {
		handleOpenChangeInfoSuccess()
		onClose()
		changeBio(newBio)
	}
	function handleCancelChange() {
		handleOpenChangeInfoCancel()
		setNewBio(bio)
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
				id="17"
				isOpened={isOpened}
				onClose={onClose}
				primaryButtonOnClick={handleApproveChange}
				primaryButtonText="Apply changes"
				secondaryButtonOnClick={handleCancelChange}
				secondaryButtonText="Cancel"
			>
				<textarea
					className={styles.textarea}
					value={newBio}
					onChange={handleChange}
				/>
			</Dialog>

			<Dialog
				id="18"
				isOpened={isChangeInfoOpen.success}
				onClose={handleCloseChangeInfoSuccess}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseChangeInfoSuccess}
			>
				<p className={styles.message}>
					✅ You biography was successfully changed!
				</p>
			</Dialog>

			<Dialog
				id="19"
				isOpened={isChangeInfoOpen.cancel}
				onClose={handleCloseChangeInfoCancel}
				primaryButtonText="Continue"
				primaryButtonOnClick={handleCloseChangeInfoCancel}
			>
				<p className={styles.message}>🚫 Failed to edit your biography!</p>
			</Dialog>
		</>
	)
}

export default ChangeBioPopup
