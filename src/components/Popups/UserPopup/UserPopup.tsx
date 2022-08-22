import { FC, useState } from 'react'
import { Status } from '../../../types/Status'
import { User } from '../../../types/User'
import EditStatusPopup from '../EditStatusPopup/EditStatusPopup'
import StatusCancelPopup from '../StatusCancelPopup/StatusCancelPopup'
import StatusSuccessPopup from '../StatusSuccessPopup/StatusSuccessPopup'
import OverlayingPopup from '../../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'
import FriendPopover from '../../Popovers/FriendPopover/FriendPopover'
import FriendsListPopup from '../FriendsListPopup/FriendsListPopup'
import ChangeNicknamePopover from '../../Popovers/ChangeNicknamePopover/ChangeNicknamePopover'

interface UserPopupProps {
	isOpened: boolean
	onClose: () => void
	user: User
	setUserStatus: (status: Status) => void
	handleChangeFriends: (newFriends: User[]) => void
	handleChangeNickname: (nickname: string) => void
}

const UserPopup: FC<UserPopupProps> = ({
	isOpened,
	onClose,
	user,
	setUserStatus,
	handleChangeFriends,
	handleChangeNickname
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

	const [isFriendsListOpen, setIsFriendsListOpen] = useState(false)

	function handleCloseFriendsList() {
		setIsFriendsListOpen(false)
	}

	function handleOpenFriendsList() {
		setIsFriendsListOpen(true)
	}

	const [isChangeNicknameOpen, setIsChangeNicknameOpen] = useState(false)
	const [changeNicknameRefElement, setChangeNicknameRefElement] =
		useState<any>()

	function handleCloseChangeNickname() {
		setIsChangeNicknameOpen(false)
	}

    function handleOpenChangeNickname() {
        setIsChangeNicknameOpen(true)
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

			<FriendsListPopup
				id="8"
				isOpened={isFriendsListOpen}
				onClose={handleCloseFriendsList}
				friends={user.friends}
				handleChangeFriends={handleChangeFriends}
			/>

			<ChangeNicknamePopover
				isOpen={isChangeNicknameOpen}
				onClose={handleCloseChangeNickname}
				nickname={user.nickname}
				referenceElement={changeNicknameRefElement}
				handleChangeNickname={handleChangeNickname}
			/>

			<div className={styles.container}>
				<div className={styles.header} onClick={onClose}>
					<button className={styles['close-btn']}></button>
				</div>
				<div className={styles.body}>
					<div className={styles['main-block']}>
						<div className={styles.avatar}>{user.avatar}</div>
						<div className={styles.info}>
							<div
								className={styles['nickname-container']}
								ref={setChangeNicknameRefElement}
                                onClick={handleOpenChangeNickname}
							>
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
								{user.friends.length === 0 && (
									<p className={styles['no-friends-msg']}>
										You don't have any friends yet! They will appear here once
										you add them.
									</p>
								)}
								{user.friends.length > 0 && (
									<>
										<div
											ref={setFirstFriendPopoverRefElement}
											onClick={toggleFirstFriendPopover}
											className={styles['friend-avatar-miniature']}
										>
											{user.friends[0].avatar}
										</div>
										<FriendPopover
											id="5"
											isOpen={isFriendsPopoverOpen.firstFriend}
											onClose={handleFirstFriendPopoverClose}
											referenceElement={firstFriendPopoverRefElement}
											friend={user.friends[0]}
										/>
									</>
								)}

								{user.friends.length > 1 && (
									<>
										<div
											ref={setSecondFriendPopoverRefElement}
											onClick={toggleSecondFriendPopover}
											className={styles['friend-avatar-miniature']}
										>
											{user.friends[1].avatar}
										</div>
										<FriendPopover
											id="6"
											isOpen={isFriendsPopoverOpen.secondFriend}
											onClose={handleSecondFriendPopoverClose}
											referenceElement={secondFriendPopoverRefElement}
											friend={user.friends[1]}
										/>
									</>
								)}

								{user.friends.length > 2 && (
									<>
										<div
											ref={setThirdFriendPopoverRefElement}
											onClick={toggleThirdFriendPopover}
											className={styles['friend-avatar-miniature']}
										>
											{user.friends[2].avatar}
										</div>
										<FriendPopover
											id="7"
											isOpen={isFriendsPopoverOpen.thirdFriend}
											onClose={handleThirdFriendPopoverClose}
											referenceElement={thirdFriendPopoverRefElement}
											friend={user.friends[2]}
										/>
									</>
								)}
								{user.friends.length >= 3 && (
									<button
										className={styles['expand-friends-btn']}
										onClick={handleOpenFriendsList}
									></button>
								)}
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
