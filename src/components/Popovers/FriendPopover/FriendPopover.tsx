import { FC } from 'react'
import { User } from '../../../types/User'
import Popover from '../../UiKit/Popover/Popover'
import styles from './FriendPopover.module.scss'

interface FriendPopoverProps {
    isOpen: boolean
    onClose: () => void
    id: string
    referenceElement: any
    friend: User
}

const FriendPopover: FC<FriendPopoverProps> = ({id, isOpen, onClose, referenceElement, friend}) => {
    return (
        <Popover isOpen={isOpen} onClose={onClose} id={id} referenceElement={referenceElement}>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <p>{friend.avatar}</p>
                </div>
                <div className={styles['info-container']}>
                    <div className={styles['nickname-container']}>
                        <p>{friend.nickname}</p>
                    </div>
                    <div className={styles['status-container']}>
                        <p><span>Status:</span> {friend.status}</p>
                    </div>
                </div>
            </div>
        </Popover>
    )
}

export default FriendPopover