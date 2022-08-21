import { FC, useState } from 'react'
import { Status } from '../../../types/Status'
import { User } from '../../../types/User'
import EditStatusPopup from '../EditStatusPopup/EditStatusPopup'
import StatusCancelPopup from '../StatusCancelPopup/StatusCancelPopup'
import StatusSuccessPopup from '../StatusSuccessPopup/StatusSuccessPopup'
import Dialog from '../../UiKit/Dialog/Dialog'
import OverlayingPopup from '../../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'

interface UserPopupProps {
	isOpened: boolean
	onClose: () => void
	user: User
	setUserStatus: (status: Status) => void
}

const UserPopup: FC<UserPopupProps> = ({
	isOpened,
	onClose,
	user,
	setUserStatus
}) => {
	const [showEditStatus, setShowEditStatus] = useState(false)

	function handleShowEditStatus() {
		setShowEditStatus(true)
	}

	function handleCloseEditStatus() {
		setShowEditStatus(false)
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
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={user.id}>
			<EditStatusPopup
				currentStatus={user.status}
				isOpened={showEditStatus}
				onClose={handleCloseEditStatus}
				setUserStatus={setUserStatus}
				handleEditStatusSuccess={handleEditStatusSuccess}
				handleEditStatusError={handleEditStatusError}
			/>
			<StatusSuccessPopup
				isOpened={editStatusSuccess}
				onClose={handleCloseStatusSuccess}
			/>
			<StatusCancelPopup
				isOpened={editStatusError}
				onClose={handleCloseStatusError}
			/>

			<div className={styles.container}>
				<div className={styles.header} onClick={onClose}>
					<button className={styles['close-btn']}></button>
				</div>
				<div className={styles.body}>
					<div className={styles['main-block']}>
						<div className={styles.avatar}>{user.avatar}</div>
						<div className={styles.info}>
							<div className={styles['nickname-container']}>
								<h1>{user.nickname}</h1>
							</div>
							<div
								className={styles['status-container']}
								onClick={handleShowEditStatus}
							>
								<h1>
									<span>Status:</span> {user.status}
								</h1>
							</div>
							<div className={styles['friends-container']}>
								<h3>Friends:</h3>
								<div className={styles['friend-avatar-miniature']}>
									{user.friends[0].avatar}
								</div>
								<div className={styles['friend-avatar-miniature']}>
									{user.friends[1].avatar}
								</div>
								<div className={styles['friend-avatar-miniature']}>
									{user.friends[2].avatar}
								</div>
								<button className={styles['expand-friends-btn']}></button>
							</div>
						</div>
					</div>
					<div className={styles['bio-block']}>
						<h2>Autobiography: </h2>
						<div className={styles['bio-container']}>
							<p>{user.bio}</p>
						</div>
					</div>
				</div>
			</div>
		</OverlayingPopup>
	)
}

export default UserPopup
