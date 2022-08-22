import React, { FC, useEffect } from 'react'

interface EnterListenerProps {
	func: () => void
	children: React.ReactNode
}

const EnterListener: FC<EnterListenerProps> = ({ func, children }) => {
	useEffect(() => {
		const handleEnter = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				func()
			}
		}

		document.body.addEventListener('keydown', handleEnter)
	})

	return <>{children}</>
}

export default EnterListener
