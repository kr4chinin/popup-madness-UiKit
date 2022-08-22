import { useEffect } from 'react'

export function useClickOutside(
	popperRef: HTMLElement,
	elementRef: HTMLElement,
	func: () => void
) {
	useEffect(() => {
		function handleClickOutside(e: any) {
			if (e.target === elementRef) {
				return
			}
			if (popperRef && !popperRef.contains(e.target)) {
				func()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [popperRef, elementRef, func])
}
