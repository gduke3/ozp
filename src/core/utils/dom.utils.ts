export function getOffset(element: HTMLElement | SVGElement | null) {
	const DomRect = getDomRect(element);

	const body = document.body;
	const documentElement = document.documentElement;

	const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
	const scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;

	const clientTop = documentElement.clientTop || body.clientTop || 0;
	const clientLeft = documentElement.clientLeft || body.clientLeft || 0;

	const top = DomRect.top + scrollTop - clientTop;
	const left = DomRect.left + scrollLeft - clientLeft;

	return { top: Math.round(top), left: Math.round(left) };
}

export function getDomRect(element: HTMLElement | SVGElement | null) {
	return (
		element?.getBoundingClientRect() || {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0,
			x: 0,
			y: 0,
		}
	);
}

export function calculateMousePositionInsideElement(
	element: HTMLElement | SVGElement | Document | null,
	mousePosition: { x: number; y: number }
) {
	const offset = element === document ? { top: 0, left: 0 } : getOffset(element as HTMLElement);

	return {
		x: mousePosition.x - offset.left || 0,
		y: mousePosition.y - offset.top || 0,
	};
}
