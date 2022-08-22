import { Placement } from '@popperjs/core'
import { FC, useState } from 'react'
import { usePopper } from 'react-popper'
import { useClickOutside } from '../../../hooks/useClickOutside'
import Portal from '../Portal/Portal'
import cl from './Popover.module.scss'

interface PopoverProps {
	isOpen: boolean
	onClose: () => void
	referenceElement: any
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
	const [popperElement, setPopperElement] = useState<any>()

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
				className={cl.popover}
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
