import { useEffect } from 'react'

export const useCreatePortalsDiv = () => {
	useEffect(() => {
		const portalsDiv = document.createElement('div')
		portalsDiv.id = 'portals'

		document.body.appendChild(portalsDiv)
	}, [])
}
