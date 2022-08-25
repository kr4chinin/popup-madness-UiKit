import { Placement } from '@popperjs/core'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { usePopper } from 'react-popper'
import { useAppSelector } from '../../../hooks/redux'
import { useClickOutside } from '../../../hooks/useClickOutside'
import Portal from '../Portal/Portal'
import cl from './Popover.module.scss'

interface PopoverProps {
	isOpen: boolean
	onClose: () => void
	referenceElement: HTMLElement | null
	placement?: Placement
	children: React.ReactNode
	id: string
}

const Popover: FC<PopoverProps> = ({
	isOpen,
	onClose,
	referenceElement,
	children,
	id,
	placement
}) => {
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
		null
	)

	const theme = useAppSelector(state => state.themeSliceReducer)

	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		placement: placement ?? 'bottom-end',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 10]
				}
			}
		]
	})

	useClickOutside(popperElement, referenceElement, onClose)

	if (!isOpen) {
		return null
	}

	return (
		<Portal onClose={onClose} id={id}>
			<div
				id="popover"
				className={classNames(cl.popover, { [`${cl.dark}`]: theme === 'dark' })}
				ref={setPopperElement}
				style={styles.popper}
				{...attributes.popper}
			>
				{children}
			</div>
		</Portal>
	)
}

export default Popover
