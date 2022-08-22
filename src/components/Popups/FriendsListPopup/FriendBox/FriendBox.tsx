import { FC, useState } from 'react'
import { User } from '../../../../types/User'
import styles from './FriendBox.module.scss'

interface FriendBoxProps {
	friend: User
}

const FriendBox: FC<FriendBoxProps> = ({ friend }) => {
	const [friendBio, setFriendBio] = useState(friend.bio.slice(0, 140))

	function handleShowMore() {
		setFriendBio(friend.bio)
	}

	function handleShowLess() {
		setFriendBio(friend.bio.slice(0, 140))
	}

	return (
		<div className={styles.container}>
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
		</div>
	)
}

export default FriendBox
