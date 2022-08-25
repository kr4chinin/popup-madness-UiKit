import classNames from 'classnames'
import { FC } from 'react'
import styles from './Toggle.module.scss'

interface ToggleProps {
	isToggled: boolean
	toggle: () => void
}

const Toggle: FC<ToggleProps> = ({ isToggled, toggle }) => {
	return (
		<div
			onClick={toggle}
			className={classNames(styles.toggle, { [`${styles.night}`]: isToggled })}
		>
			<div className={styles.notch}>
				<div className={styles.crater} />
				<div className={styles.crater} />
			</div>
			<div>
				<div className={classNames(styles.shape, styles.sm)} />
				<div className={classNames(styles.shape, styles.sm)} />
				<div className={classNames(styles.shape, styles.md)} />
				<div className={classNames(styles.shape, styles.lg)} />
			</div>
		</div>
	)
}

export default Toggle
