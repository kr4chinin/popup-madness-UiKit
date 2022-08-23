import { FC, useState } from 'react'
import EditStatusPopup from '../EditStatusPopup/EditStatusPopup'
import StatusCancelPopup from '../StatusCancelPopup/StatusCancelPopup'
import StatusSuccessPopup from '../StatusSuccessPopup/StatusSuccessPopup'
import OverlayingPopup from '../../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'
import FriendPopover from '../../Popovers/FriendPopover/FriendPopover'
import FriendsListPopup from '../FriendsListPopup/FriendsListPopup'
import ChangeNicknamePopover from '../../Popovers/ChangeNicknamePopover/ChangeNicknamePopover'
import { useAppSelector } from '../../../hooks/redux'

interface UserPopupProps {
	isOpened: boolean
	onClose: () => void
}

const UserPopup: FC<UserPopupProps> = ({ isOpened, onClose }) => {
	const [showEditStatus, setShowEditStatus] = useState(false)

	const { nickname, status, avatar, friends, id, bio } = useAppSelector(
		state => state.userSliceReducer
	)

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

	type friendNumber = 'firstFriend' | 'secondFriend' | 'thirdFriend'

	function handleFriendPopoverClose(friend: friendNumber) {
		setIsFriendsPopoverOpen({
			...isFriendsPopoverOpen,
			[friend]: false
		})
	}

	function toggleFriendPopover(friend: friendNumber) {
		setIsFriendsPopoverOpen(prev => {
			return {
				...prev,
				[friend]: !prev[friend]
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
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={id}>
			<EditStatusPopup
				isOpened={showEditStatus}
				onClose={handleCloseEditStatus}
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
			/>

			<ChangeNicknamePopover
				isOpen={isChangeNicknameOpen}
				onClose={handleCloseChangeNickname}
				referenceElement={changeNicknameRefElement}
			/>
			<div className={styles.container}>
				<div className={styles.header} onClick={onClose}>
					<button className={styles['close-btn']}></button>
				</div>
				<div className={styles.body}>
					<div className={styles['main-block']}>
						<div className={styles.avatar}>{avatar}</div>
						<div className={styles.info}>
							<div
								className={styles['nickname-container']}
								ref={setChangeNicknameRefElement}
								onClick={handleOpenChangeNickname}
							>
								<h1>{nickname}</h1>
							</div>
							<div
								className={styles['status-container']}
								onClick={handleShowEditStatus}
							>
								<h1>
									<span>Status:</span> {status}
								</h1>
							</div>
							<div className={styles['friends-container']}>
								<h3>Friends:</h3>
								{friends.length === 0 && (
									<p className={styles['no-friends-msg']}>
										You don't have any friends yet! They will appear here once
										you add them.
									</p>
								)}
								{friends.length > 0 && (
									<>
										<div
											ref={setFirstFriendPopoverRefElement}
											onClick={() => toggleFriendPopover('firstFriend')}
											className={styles['friend-avatar-miniature']}
										>
											{friends[0].avatar}
										</div>
										<FriendPopover
											id="5"
											isOpen={isFriendsPopoverOpen.firstFriend}
											onClose={() => handleFriendPopoverClose('firstFriend')}
											referenceElement={firstFriendPopoverRefElement}
											friend={friends[0]}
										/>
									</>
								)}

								{friends.length > 1 && (
									<>
										<div
											ref={setSecondFriendPopoverRefElement}
											onClick={() => toggleFriendPopover('secondFriend')}
											className={styles['friend-avatar-miniature']}
										>
											{friends[1].avatar}
										</div>
										<FriendPopover
											id="6"
											isOpen={isFriendsPopoverOpen.secondFriend}
											onClose={() => handleFriendPopoverClose('secondFriend')}
											referenceElement={secondFriendPopoverRefElement}
											friend={friends[1]}
										/>
									</>
								)}

								{friends.length > 2 && (
									<>
										<div
											ref={setThirdFriendPopoverRefElement}
											onClick={() => toggleFriendPopover('thirdFriend')}
											className={styles['friend-avatar-miniature']}
										>
											{friends[2].avatar}
										</div>
										<FriendPopover
											id="7"
											isOpen={isFriendsPopoverOpen.thirdFriend}
											onClose={() => handleFriendPopoverClose('thirdFriend')}
											referenceElement={thirdFriendPopoverRefElement}
											friend={friends[2]}
										/>
									</>
								)}
								{friends.length >= 3 && (
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
							<p>{bio}</p>
						</div>
					</div>
				</div>
			</div>
		</OverlayingPopup>
	)
}

export default UserPopup
