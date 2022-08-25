import classNames from 'classnames'
import { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { User } from '../../../types/User'
import Popover from '../../UiKit/Popover/Popover'
import styles from './FriendPopover.module.scss'

interface FriendPopoverProps {
	isOpen: boolean
	onClose: () => void
	id: string
	referenceElement: HTMLElement | null
	friend: User
}

const FriendPopover: FC<FriendPopoverProps> = ({
	id,
	isOpen,
	onClose,
	referenceElement,
	friend
}) => {
	const theme = useAppSelector(state => state.themeSliceReducer)

	return (
		<Popover
			isOpen={isOpen}
			onClose={onClose}
			id={id}
			referenceElement={referenceElement}
		>
			<div
				className={classNames(styles.container, {
					[`${styles.dark}`]: theme === 'dark'
				})}
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
							<span>Status:</span> {friend.status}
						</p>
					</div>
				</div>
			</div>
		</Popover>
	)
}

export default FriendPopover
