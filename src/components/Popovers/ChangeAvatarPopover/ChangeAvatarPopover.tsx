import React, { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import { Avatar } from '../../../types/Avatar'
import Dialog from '../../UiKit/Dialog/Dialog'
import Popover from '../../UiKit/Popover/Popover'
import styles from './ChangeAvatarPopover.module.scss'

interface ChangeAvatarPopoverProps {
	isOpen: boolean
	onClose: () => void
	referenceElement: HTMLElement
}

const ChangeAvatarPopover: FC<ChangeAvatarPopoverProps> = ({
	isOpen,
	onClose,
	referenceElement
}) => {
	const { avatar: currentAvatar } = useAppSelector(
		state => state.userSliceReducer
	)
	const { changeAvatar } = useUserActions()

	const [newAvatar, setNewAvatar] = useState(currentAvatar)

	const [isChangeInfoOpen, setIsChangeInfoOpen] = useState({
		success: false,
		cancel: false
	})

	function handleChangeAvatar(avatar: Avatar) {
		setNewAvatar(avatar)
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

	function handleApproveChange() {
		handleOpenChangeInfoSuccess()
		onClose()
		changeAvatar(newAvatar)
	}
	function handleCancelChange() {
		handleOpenChangeInfoCancel()
		onClose()
	}

	return (
		<>
			<Popover
				isOpen={isOpen}
				onClose={onClose}
				referenceElement={referenceElement}
				id="14"
				placement="left"
			>
				<h4>Choose new avatar: </h4>
				<select multiple className={styles['select']}>
					{Object.values(Avatar).map((avatar, index) => (
						<option
							key={index}
							className={styles['option-container']}
							value={avatar}
							onClick={() => handleChangeAvatar(avatar)}
						>
							{avatar}
						</option>
					))}
				</select>
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

			<Dialog
				id="15"
				isOpened={isChangeInfoOpen.success}
				onClose={handleCloseChangeInfoSuccess}
				primaryButtonOnClick={handleCloseChangeInfoSuccess}
				primaryButtonText="Continue"
			>
				<p>
					🟢 Your <b>avatar</b> was successfully changed!
				</p>
			</Dialog>
			<Dialog
				id="16"
				isOpened={isChangeInfoOpen.cancel}
				onClose={handleCloseChangeInfoCancel}
				primaryButtonOnClick={handleCloseChangeInfoCancel}
				primaryButtonText="Continue"
			>
				<p>
					🔴 Failed to set new <b>avatar</b>!
				</p>
			</Dialog>
		</>
	)
}

export default ChangeAvatarPopover
