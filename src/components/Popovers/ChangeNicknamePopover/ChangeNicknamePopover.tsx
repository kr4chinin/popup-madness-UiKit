import React, { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import Dialog from '../../UiKit/Dialog/Dialog'
import Popover from '../../UiKit/Popover/Popover'
import styles from './ChangeNicknamePopover.module.scss'

interface ChangeNicknamePopoverProps {
	isOpen: boolean
	onClose: () => void
	referenceElement: HTMLElement
}

const ChangeNicknamePopover: FC<ChangeNicknamePopoverProps> = ({
	isOpen,
	onClose,
	referenceElement
}) => {
	const { nickname } = useAppSelector(state => state.userSliceReducer)
    const { changeNickname } = useUserActions()

	const [newNickname, setNewNickname] = useState(nickname)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setNewNickname(e.target.value)
	}

	const [isChangeInfoOpen, setIsChangeInfoOpen] = useState({
		success: false,
		cancel: false
	})

	function handleApproveChange() {
		handleOpenChangeInfoSuccess()
		onClose()
		changeNickname(newNickname)
	}

	function handleCancelChange() {
		handleOpenChangeInfoCancel()
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
				id="12"
				isOpened={isChangeInfoOpen.success}
				onClose={handleCloseChangeInfoSuccess}
				primaryButtonOnClick={handleCloseChangeInfoSuccess}
				primaryButtonText="Continue"
			>
				<p>
					🟢 Your name was successfully changed to <b>{newNickname}</b>!
				</p>
			</Dialog>
			<Dialog
				id="13"
				isOpened={isChangeInfoOpen.cancel}
				onClose={handleCloseChangeInfoCancel}
				primaryButtonOnClick={handleCloseChangeInfoCancel}
				primaryButtonText="Continue"
			>
				<p>🔴 Failed to set new nickname!</p>
			</Dialog>
			<Popover
				id="11"
				isOpen={isOpen}
				onClose={onClose}
				referenceElement={referenceElement}
				placement="left"
			>
				<input
					className={styles.input}
					value={newNickname}
					onChange={handleChange}
				/>
				<div className={styles['btns-container']}>
					<button className={styles['cancel-btn']} onClick={handleCancelChange}>
						Cancel ❌
					</button>
					<button
						className={styles['approve-btn']}
						onClick={handleApproveChange}
					>
						Approve ✔️
					</button>
				</div>
			</Popover>
		</>
	)
}

export default ChangeNicknamePopover
