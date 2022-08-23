import { FC, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useUserActions } from '../../../hooks/useUserActions'
import { User } from '../../../types/User'
import FullScreenPopup from '../../UiKit/FullScreenPopup/FullScreenPopup'
import FriendBox from './FriendBox/FriendBox'
import styles from './FriendsListPopup.module.scss'

interface FriendsListPopupProps {
	isOpened: boolean
	onClose: () => void
	id: string
}

const FriendsListPopup: FC<FriendsListPopupProps> = ({
	id,
	isOpened,
	onClose
}) => {
	const { friends } = useAppSelector(state => state.userSliceReducer)

	const [deleteQueue, setDeleteQueue] = useState<string[]>([])

	const { changeFriends } = useUserActions()

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
		changeFriends(newFriends)
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
