import { useEffect } from "react";

export type Listener<T> = (event: T) => any;

export function useEventListener<T extends keyof WindowEventMap>(
	target: Window,
	event: T,
	listener: Listener<WindowEventMap[T]>
): void;
export function useEventListener<T extends keyof GlobalEventHandlersEventMap>(
	target: Document | Element,
	event: T,
	listener: Listener<GlobalEventHandlersEventMap[T]>
): void;

export function useEventListener(target: any, event: any, listener: (event: any) => any) {
	useEffect(() => {
		// @ts-ignore
		target.addEventListener(event, listener);

		return () => {
			// @ts-ignore
			target.removeEventListener(event, listener);
		};
	}, [event, listener, target]);
}
