import { clamp } from "./math.utils";

export function calculateCurrentIndex2D(array: any[], x: number, y: number): number {
	return array.slice(0, x).reduce((acc, row) => acc + row.length, 0) + y;
}

export function splitIntoWords(string: string, includeSpaces: boolean = false): string[] {
	return string
		.split(" ")
		.flatMap((word, index) => (includeSpaces && index !== 0 ? [" ", word] : [word]));
}

export function debounce<T extends any[]>(callback: (...args: T) => void, time: number) {
	let timeout: any;

	return function (this: any, ...args: any[]) {
		const effect = () => {
			timeout = null;
			return callback.apply(this, args as unknown as any);
		};

		clearTimeout(timeout);

		timeout = setTimeout(effect, time);
	};
}

export function mergeCallbacks<T extends Function>(...callbacks: (T | null | undefined)[]) {
	const filteredCallbacks = callbacks.filter(Boolean) as T[];

	if (filteredCallbacks.length === 0) {
		return () => {};
	}

	return (...args: any[]) => {
		for (const callback of filteredCallbacks) {
			callback(...args);
		}
	};
}

export function mergeRefs<E = any>(
	...refs: (React.ForwardedRef<any> | null | undefined)[]
): (instance: E | null) => void {
	const filteredRefs = refs.filter(Boolean);

	if (filteredRefs.length === 0) {
		return undefined as any;
	}

	return (instance: E | null) => {
		for (const ref of filteredRefs) {
			if (typeof ref === "function") {
				ref(instance);
			} else if (ref) {
				ref.current = instance;
			}
		}
	};
}

export function normalizePosition(
	position: { x: number; y: number },
	bounds: { width: number; height: number }
) {
	const normalized = {
		x: position.x / Math.max(bounds.width, 0.1),
		y: position.y / Math.max(bounds.height, 0.1),
	};
	return {
		x: clamp((normalized.x - 0.5) * 2, -1, 1),
		y: clamp((normalized.y - 0.5) * 2, -1, 1),
	};
}
