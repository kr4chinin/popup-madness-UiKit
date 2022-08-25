import { FC, useRef, useState } from 'react'
import ChangeStatusPopup from '../ChangeStatusPopup/ChangeStatusPopup'
import OverlayingPopup from '../../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'
import FriendPopover from '../../Popovers/FriendPopover/FriendPopover'
import FriendsListPopup from '../FriendsListPopup/FriendsListPopup'
import ChangeNicknamePopover from '../../Popovers/ChangeNicknamePopover/ChangeNicknamePopover'
import { useAppSelector } from '../../../hooks/redux'
import ChangeAvatarPopover from '../../Popovers/ChangeAvatarPopover/ChangeAvatarPopover'
import ChangeBioPopup from '../ChangeBioPopup/ChangeBioPopup'
import classNames from 'classnames'

interface UserPopupProps {
	isOpened: boolean
	onClose: () => void
}

const UserPopup: FC<UserPopupProps> = ({ isOpened, onClose }) => {
	type friendNumber = 'firstFriend' | 'secondFriend' | 'thirdFriend'

	const theme = useAppSelector(state => state.themeSliceReducer)

	const [isChangeAvatarOpen, setIsChangeAvatarOpen] = useState(false)
	const changeAvatarRefElement = useRef<HTMLDivElement>(null)

	const { nickname, status, avatar, friends, id, bio } = useAppSelector(
		state => state.userSliceReducer
	)

	const [isChangeNicknameOpen, setIsChangeNicknameOpen] = useState(false)
	const changeNicknameRefElement = useRef<HTMLDivElement>(null)

	const [isChangeStatusOpen, setIsChangeStatusOpen] = useState(false)
	const [isChangeBioOpen, setIsChangeBioOpen] = useState(false)

	const [isFriendsListOpen, setIsFriendsListOpen] = useState(false)

	const firstFriendPopoverRefElement = useRef<HTMLDivElement>(null)
	const secondFriendPopoverRefElement = useRef<HTMLDivElement>(null)
	const thirdFriendPopoverRefElement = useRef<HTMLDivElement>(null)

	const [isFriendsPopoverOpen, setIsFriendsPopoverOpen] = useState({
		firstFriend: false,
		secondFriend: false,
		thirdFriend: false
	})

	function toggleAvatarPopover() {
		setIsChangeAvatarOpen(prev => !prev)
	}
	function handleCloseChangeAvatar() {
		setIsChangeAvatarOpen(false)
	}

	function handleOpenChangeStatus() {
		setIsChangeStatusOpen(true)
	}
	function handleCloseChangeStatus() {
		setIsChangeStatusOpen(false)
	}

	function handleOpenChangeBio() {
		setIsChangeBioOpen(true)
	}
	function handleCloseChangeBio() {
		setIsChangeBioOpen(false)
	}

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

    function toggleNicknamePopover() {
        setIsChangeNicknameOpen(prev => !prev)
    }
    function handleCloseChangeNickname() {
		setIsChangeNicknameOpen(false)
	}

	function handleCloseFriendsList() {
		setIsFriendsListOpen(false)
	}
	function handleOpenFriendsList() {
		setIsFriendsListOpen(true)
	}

	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={id}>
			<ChangeStatusPopup
				isOpened={isChangeStatusOpen}
				onClose={handleCloseChangeStatus}
			/>
			<ChangeBioPopup
				isOpened={isChangeBioOpen}
				onClose={handleCloseChangeBio}
			/>

			<ChangeAvatarPopover
				isOpen={isChangeAvatarOpen}
				onClose={handleCloseChangeAvatar}
				referenceElement={changeAvatarRefElement.current}
			/>
			<ChangeNicknamePopover
				isOpen={isChangeNicknameOpen}
				onClose={handleCloseChangeNickname}
				referenceElement={changeNicknameRefElement.current}
			/>

			<FriendsListPopup
				isOpened={isFriendsListOpen}
				onClose={handleCloseFriendsList}
			/>
			<div
				className={classNames(styles.container, {
					[`${styles.dark}`]: theme === 'dark'
				})}
			>
				<div className={styles.header} onClick={onClose}>
					<button className={styles['close-btn']}></button>
				</div>
				<div className={styles.body}>
					<div className={styles['main-block']}>
						<div
							className={styles.avatar}
							onClick={toggleAvatarPopover}
							ref={changeAvatarRefElement}
						>
							<span>{avatar}</span>
						</div>
						<div className={styles.info}>
							<div
								className={styles['nickname-container']}
								ref={changeNicknameRefElement}
								onClick={toggleNicknamePopover}
							>
								<h1>{nickname}</h1>
							</div>
							<div
								className={styles['status-container']}
								onClick={handleOpenChangeStatus}
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
											ref={firstFriendPopoverRefElement}
											onClick={() => toggleFriendPopover('firstFriend')}
											className={styles['friend-avatar-miniature']}
										>
											{friends[0].avatar}
										</div>
										<FriendPopover
											id="5"
											isOpen={isFriendsPopoverOpen.firstFriend}
											onClose={() => handleFriendPopoverClose('firstFriend')}
											referenceElement={firstFriendPopoverRefElement.current}
											friend={friends[0]}
										/>
									</>
								)}

								{friends.length > 1 && (
									<>
										<div
											ref={secondFriendPopoverRefElement}
											onClick={() => toggleFriendPopover('secondFriend')}
											className={styles['friend-avatar-miniature']}
										>
											{friends[1].avatar}
										</div>
										<FriendPopover
											id="6"
											isOpen={isFriendsPopoverOpen.secondFriend}
											onClose={() => handleFriendPopoverClose('secondFriend')}
											referenceElement={secondFriendPopoverRefElement.current}
											friend={friends[1]}
										/>
									</>
								)}

								{friends.length > 2 && (
									<>
										<div
											ref={thirdFriendPopoverRefElement}
											onClick={() => toggleFriendPopover('thirdFriend')}
											className={styles['friend-avatar-miniature']}
										>
											{friends[2].avatar}
										</div>
										<FriendPopover
											id="7"
											isOpen={isFriendsPopoverOpen.thirdFriend}
											onClose={() => handleFriendPopoverClose('thirdFriend')}
											referenceElement={thirdFriendPopoverRefElement.current}
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
						<div
							className={styles['bio-container']}
							onClick={handleOpenChangeBio}
						>
							<p>{bio}</p>
						</div>
					</div>
				</div>
			</div>
		</OverlayingPopup>
	)
}

export default UserPopup
