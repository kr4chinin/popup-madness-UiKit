import { FC } from 'react'
import Portal from '../Portal/Portal'
import styles from './FullScreenPopup.module.scss'

interface FullScreenPopupProps {
	children: React.ReactNode
	isOpened: boolean
	onClose: () => void
	id: string
    title: string
}

const FullScreenPopup: FC<FullScreenPopupProps> = ({
	children,
	isOpened,
	onClose,
	id,
    title
}) => {
	if (!isOpened) {
		return null
	}

	return (
		<Portal onClose={onClose} id={id}>
			<div className={styles.popup}>
				<div className={styles.navbar}>
                    <button className={styles['close-container']} onClick={onClose}>
                        <p>&#10005;</p>
                    </button>
                    <p className={styles['page-title']}>{title}</p>
                </div>
				{children}
			</div>
		</Portal>
	)
}

export default FullScreenPopup
