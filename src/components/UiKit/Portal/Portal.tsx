import { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import EscapeListener from '../../KeyboardListeners/EscapeListener'

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
	}, [container, portals])

	return ReactDOM.createPortal(
		<EscapeListener id={id} onClose={onClose} portals={portals}>
			{children}
		</EscapeListener>,
		container
	)
}

export default Portal
