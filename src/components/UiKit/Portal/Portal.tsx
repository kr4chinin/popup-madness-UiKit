import { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import KeyboardListener from '../../KeyboardListener/KeyboardListener'

interface PortalProps {
	children: React.ReactNode
	onClose: () => void
	id: string
}

const Portal: FC<PortalProps> = ({ children, onClose, id }) => {
	const [container] = useState(() => document.createElement('div'))
	container.id = id

	const portals = document.getElementById('portals')!

	useEffect(() => {
		portals.appendChild(container)

		return () => {
			portals.removeChild(container)
		}
	}, [container, id, onClose, portals])

	return ReactDOM.createPortal(
		<KeyboardListener id={id} onClose={onClose} portals={portals}>
			{children}
		</KeyboardListener>,
		container
	)
}

export default Portal
