import classNames from 'classnames'
import { FC, useState } from 'react'
import { User } from '../../../../types/User'
import Dialog from '../../../UiKit/Dialog/Dialog'
import styles from './FriendBox.module.scss'

interface FriendBoxProps {
	friend: User
	handleAddToDeleteQueue: (id: string) => void
}

const FriendBox: FC<FriendBoxProps> = ({ friend, handleAddToDeleteQueue }) => {
	const [friendBio, setFriendBio] = useState(friend.bio.slice(0, 140))

	function handleShowMore() {
		setFriendBio(friend.bio)
	}

	function handleShowLess() {
		setFriendBio(friend.bio.slice(0, 140))
	}

	const [willBeDeleted, setWillBeDeleted] = useState(false)

	function handleDelete() {
		handleAddToDeleteQueue(friend.id)
		setWillBeDeleted(true)
		handleCloseDeleteFriendConfirm()
		setTimeout(() => setIsDeleteFriendInfoOpen(true), 0)
	}

	const [isDeleteFriendConfirmOpen, setIsDeleteFriendConfirmOpen] =
		useState(false)

	function handleOpenDeleteFriendConfirm() {
		setIsDeleteFriendConfirmOpen(true)
	}

	function handleCloseDeleteFriendConfirm() {
		setIsDeleteFriendConfirmOpen(false)
	}

	const [isDeleteFriendInfoOpen, setIsDeleteFriendInfoOpen] = useState(false)

	function handleClosedDeleteFriendInfo() {
		setIsDeleteFriendInfoOpen(false)
	}

	return (
		<>
			<Dialog
				id="9"
				isOpened={isDeleteFriendConfirmOpen}
				onClose={handleCloseDeleteFriendConfirm}
				primaryButtonText="Delete from friends"
				primaryButtonOnClick={handleDelete}
				secondaryButtonText="Cancel"
				secondaryButtonOnClick={handleCloseDeleteFriendConfirm}
			>
				<p>
					ℹ️ Are you sure you want to delete <b>{friend.nickname}</b> from
					friends?
				</p>
			</Dialog>

			<Dialog
				id="10"
				isOpened={isDeleteFriendInfoOpen}
				onClose={handleClosedDeleteFriendInfo}
				primaryButtonOnClick={handleClosedDeleteFriendInfo}
				primaryButtonText="Continue"
			>
				<p>
					🔔 <b>{friend.nickname}</b> will be removed from your friends list once
					you close this window!
				</p>
			</Dialog>
			<div
				className={classNames(
					styles.container,
					willBeDeleted && styles.deleted
				)}
			>
				<div className={styles.avatar}>
					<p>{friend.avatar}</p>
				</div>
				<div className={styles['info-container']}>
					<div className={styles['nickname-container']}>
						<p>{friend.nickname}</p>
					</div>
					<div className={styles['status-container']}>
						<p>
							<span>Status: </span>
							{friend.status}
						</p>
					</div>
				</div>
				<div className={styles['bio-container']}>
					<p>{friend.bio.length > 140 ? friendBio + '...' : friendBio}</p>
					{friend.bio.length > 140 && friendBio.length === 140 ? (
						<button
							hidden={friend.bio.length < 140}
							className={styles['view-btn']}
							onClick={handleShowMore}
						>
							Show more...
						</button>
					) : (
						<button
							hidden={friend.bio.length < 140}
							className={styles['view-btn']}
							onClick={handleShowLess}
						>
							Show less...
						</button>
					)}
				</div>
				<button
					className={styles['delete-btn']}
					onClick={handleOpenDeleteFriendConfirm}
				>
					❌
				</button>
			</div>
		</>
	)
}

export default FriendBox
