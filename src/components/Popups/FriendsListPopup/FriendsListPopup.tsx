import { FC } from 'react'
import { User } from '../../../types/User'
import FullScreenPopup from '../../UiKit/FullScreenPopup/FullScreenPopup'
import FriendBox from './FriendBox/FriendBox'
import styles from './FriendsListPopup.module.scss'

interface FriendsListPopupProps {
	isOpened: boolean
	onClose: () => void
	id: string
	friends: User[]
}

const FriendsListPopup: FC<FriendsListPopupProps> = ({
	id,
	isOpened,
	onClose,
	friends
}) => {
	return (
		<FullScreenPopup
			id={id}
			isOpened={isOpened}
			onClose={onClose}
			title="Your friends:"
		>
			<div className={styles.container}>
				{friends.map((friend, index) => (
					<FriendBox key={index} friend={friend} />
				))}
			</div>
		</FullScreenPopup>
	)
}

export default FriendsListPopup
