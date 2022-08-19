import { FC } from 'react'
import Portal from '../Portal/Portal'
import styles from './FullScreenPopup.module.scss'

interface FullScreenPopupProps {
	children: React.ReactNode
	isOpened: boolean
	onClose: () => void
    id: string
}

const FullScreenPopup: FC<FullScreenPopupProps> = ({
	children,
	isOpened,
	onClose,
    id
}) => {
	if (!isOpened) {
		return null
	}

	return (
		<Portal onClose={onClose} id={id}>
			<div className={styles.popup}>
				<button onClick={onClose}>Close</button>
				{children}
			</div>
		</Portal>
	)
}

export default FullScreenPopup