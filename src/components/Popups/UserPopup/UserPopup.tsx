import { FC, useState } from 'react'
import { Status } from '../../../types/Status'
import { User } from '../../../types/User'
import EditStatusPopup from '../EditStatusPopup/EditStatusPopup'
import StatusCancelPopup from '../StatusCancelPopup/StatusCancelPopup'
import StatusSuccessPopup from '../StatusSuccessPopup/StatusSuccessPopup'
import OverlayingPopup from '../../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'
import FriendPopover from '../../Popovers/FriendPopover/FriendPopover'

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

	const [firstFriendPopoverRefElement, setFirstFriendPopoverRefElement] =
		useState<any>()
	const [secondFriendPopoverRefElement, setSecondFriendPopoverRefElement] =
		useState<any>()
	const [thirdFriendPopoverRefElement, setThirdFriendPopoverRefElement] =
		useState<any>()

	const [isFriendsPopoverOpen, setIsFriendsPopoverOpen] = useState({
		firstFriend: false,
		secondFriend: false,
		thirdFriend: false
	})

	function handleFirstFriendPopoverClose() {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				firstFriend: false
			}
		})
	}

	function handleSecondFriendPopoverClose() {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				secondFriend: false
			}
		})
	}

	function handleThirdFriendPopoverClose() {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				thirdFriend: false
			}
		})
	}

	function toggleFirstFriendPopover() {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				firstFriend: !prev.firstFriend
			}
		})
	}

	function toggleSecondFriendPopover() {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				secondFriend: !prev.secondFriend
			}
		})
	}

	function toggleThirdFriendPopover() {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				thirdFriend: !prev.thirdFriend
			}
		})
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

			<FriendPopover
				id="5"
				isOpen={isFriendsPopoverOpen.firstFriend}
				onClose={handleFirstFriendPopoverClose}
				referenceElement={firstFriendPopoverRefElement}
				friend={user.friends[0]}
			/>
			<FriendPopover
				id="6"
				isOpen={isFriendsPopoverOpen.secondFriend}
				onClose={handleSecondFriendPopoverClose}
				referenceElement={secondFriendPopoverRefElement}
				friend={user.friends[1]}
			/>
			<FriendPopover
				id="7"
				isOpen={isFriendsPopoverOpen.thirdFriend}
				onClose={handleThirdFriendPopoverClose}
				referenceElement={thirdFriendPopoverRefElement}
				friend={user.friends[2]}
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
								<div
									data-trigger="popover"
									ref={setFirstFriendPopoverRefElement}
									onClick={toggleFirstFriendPopover}
									className={styles['friend-avatar-miniature']}
								>
									{user.friends[0].avatar}
								</div>
								<div
									data-trigger="popover"
									ref={setSecondFriendPopoverRefElement}
									onClick={toggleSecondFriendPopover}
									className={styles['friend-avatar-miniature']}
								>
									{user.friends[1].avatar}
								</div>
								<div
									data-trigger="popover"
									ref={setThirdFriendPopoverRefElement}
									onClick={toggleThirdFriendPopover}
									className={styles['friend-avatar-miniature']}
								>
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
