import { useEffect } from 'react'

export function useClickOutside(
	popperRef: HTMLElement | null,
	elementRef: HTMLElement | null,
	func: () => void
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (e.target === elementRef) {
				return
			}

			if (elementRef && elementRef.children) {
				for (let i = 0; i < elementRef.children.length; i++) {
					if (e.target === elementRef.children[i]) {
						return
					}
				}
			}

			if (popperRef && !popperRef.contains(e.target as Node)) {
				func()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [popperRef, elementRef, func])
}
