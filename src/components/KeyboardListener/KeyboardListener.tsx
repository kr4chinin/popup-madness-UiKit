import React, { FC, useEffect } from 'react'

interface KeyboardListenerProps {
	portals: HTMLElement
	onClose: () => void
	id: string
	children: React.ReactNode
}

const KeyboardListener: FC<KeyboardListenerProps> = ({
	portals,
	onClose,
	id,
	children
}) => {
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				const portals = document.getElementById('portals')!
				if (
					portals.children &&
					portals.children[portals.children.length - 1]?.id === id
				) {
					onClose()
				}
			}
		}
		document.body.addEventListener('keydown', closeOnEscapeKey)

		return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
	}, [id, portals, onClose])

	return <>{children}</>
}

export default KeyboardListener
