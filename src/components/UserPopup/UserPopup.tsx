import { FC } from 'react'
import OverlayingPopup from '../UiKit/OverlayingPopup/OverlayingPopup'
import styles from './UserPopup.module.scss'

interface UserPopupProps {
	isOpened: boolean
	onClose: () => void
	id: string
}

const UserPopup: FC<UserPopupProps> = ({ isOpened, onClose, id }) => {
	return (
		<OverlayingPopup isOpened={isOpened} onClose={onClose} id={id}>
			<div className={styles.container}>
				<div className={styles.header}>
					<button className={styles['close-btn']}></button>
				</div>
				<div className={styles.body}>
					<div className={styles['main-block']}>
						<img className={styles.avatar} />
						<div className={styles.info}>
							<div className={styles['nickname-container']}>
								<h1></h1>
							</div>
							<div className={styles['status-container']}>
								<h1></h1>
							</div>
							<div className={styles['friends-container']}>
								<h3>Friends:</h3>
								<img className={styles['friend-avatar-miniature']} />
								<img className={styles['friend-avatar-miniature']} />
								<img className={styles['friend-avatar-miniature']} />
								<button className={styles['expand-friends-btn']}></button>
							</div>
						</div>
					</div>
					<div className={styles['bio-block']}>
						<h2>Autobiography: </h2>
						<div className={styles['bio-container']}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
								quod adipisci nihil repellendus a consequuntur eos ad fugit
								labore nemo sit eligendi dolore perspiciatis temporibus ducimus
								suscipit nobis possimus praesentium, sunt quis voluptatum facere
								maiores, nulla ea. Magni enim similique dolorem aut consequatur
								neque mollitia, ducimus expedita suscipit. Laboriosam, quos!
							</p>
						</div>
					</div>
				</div>
			</div>
		</OverlayingPopup>
	)
}

export default UserPopup
