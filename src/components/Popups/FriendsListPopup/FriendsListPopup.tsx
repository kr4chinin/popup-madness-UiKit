import { FC, useState } from 'react'
import { User } from '../../../types/User'
import FullScreenPopup from '../../UiKit/FullScreenPopup/FullScreenPopup'
import FriendBox from './FriendBox/FriendBox'
import styles from './FriendsListPopup.module.scss'

interface FriendsListPopupProps {
	isOpened: boolean
	onClose: () => void
	id: string
	friends: User[]
	handleChangeFriends: (newFriends: User[]) => void
}

const FriendsListPopup: FC<FriendsListPopupProps> = ({
	id,
	isOpened,
	onClose,
	friends,
	handleChangeFriends
}) => {
	const [deleteQueue, setDeleteQueue] = useState<string[]>([])

	function handleAddToDeleteQueue(id: string) {
		setDeleteQueue([...deleteQueue, id])
	}

	function handleClose() {
		const deleteQueueSet = new Set(deleteQueue)
		let newFriends: User[] = []

		for (let v of friends) {
			if (deleteQueueSet.has(v.id)) {
				continue
			} else {
				newFriends.push(v)
			}
		}
		handleChangeFriends(newFriends)
		onClose()
	}

	return (
		<FullScreenPopup
			id={id}
			isOpened={isOpened}
			onClose={handleClose}
			title="Your friends:"
		>
			<div className={styles.container}>
				{friends.map((friend, index) => (
					<FriendBox
						key={index}
						friend={friend}
						handleAddToDeleteQueue={handleAddToDeleteQueue}
					/>
				))}
			</div>
		</FullScreenPopup>
	)
}

export default FriendsListPopup
