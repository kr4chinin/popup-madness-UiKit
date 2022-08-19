import { useEffect } from 'react'

export function useClickOutside(ref: HTMLElement, func: () => void) {
	useEffect(() => {
		function handleClickOutside(e: any) {
			if (e.target.type === 'button') {
				return
			}
			if (ref && !ref.contains(e.target)) {
				func()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, func])
}
