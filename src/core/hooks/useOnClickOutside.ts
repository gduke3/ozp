import React, { useCallback, useMemo } from "react";
import { useEventListener } from "./useEventListener";

export function useOnClickOutside(
	refs: React.RefObject<any> | React.RefObject<any>[],
	callback: (event: MouseEvent | TouchEvent) => void
) {
	const refsAsArray = useMemo(() => (Array.isArray(refs) ? refs : [refs]), [refs]);

	const handleDocumentClick = useCallback(
		(event: TouchEvent | MouseEvent) => {
			const elements = refsAsArray.map((ref) => ref.current);

			if (
				elements.some((element) => !element) ||
				elements.some((element) => element.contains(event.target))
			)
				return;

			callback(event);
		},
		[callback, refsAsArray]
	);

	useEventListener(document, "mousedown", handleDocumentClick);
	useEventListener(document, "touchstart", handleDocumentClick);
}
