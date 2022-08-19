import { FC } from 'react'
import { User } from '../../types/User'
import OverlayingPopup from '../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'

interface UserPopupProps {
	isOpened: boolean
	onClose: () => void
    user: User
}

const UserPopup: FC<UserPopupProps> = ({ isOpened, onClose, user }) => {
	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={user.id}>
			<div className={styles.container}>
				<div className={styles.header} onClick={onClose}>
					<button className={styles['close-btn']}></button>
				</div>
				<div className={styles.body}>
					<div className={styles['main-block']}>
						<div className={styles.avatar}>👤</div>
						<div className={styles.info}>
							<div className={styles['nickname-container']}>
								<h1>{user.nickname}</h1>
							</div>
							<div className={styles['status-container']}>
								<h1><span>Status:</span> {user.status}</h1>
							</div>
							<div className={styles['friends-container']}>
								<h3>Friends:</h3>
								<div className={styles['friend-avatar-miniature']}>🧑🏼‍🦱</div>
								<div className={styles['friend-avatar-miniature']}>👨🏻‍🦱</div>
								<div className={styles['friend-avatar-miniature']}>👩🏼‍🦰</div>
								<button className={styles['expand-friends-btn']}></button>
							</div>
						</div>
					</div>
					<div className={styles['bio-block']}>
						<h2>Autobiography: </h2>
						<div className={styles['bio-container']}>
							<p>
                                {user.bio}
							</p>
						</div>
					</div>
				</div>
			</div>
		</OverlayingPopup>
	)
}

export default UserPopup
