import { animate } from "framer-motion";

import { getOffset } from "@core/utils/dom.utils";

export interface Size {
	width: number;
	height: number;
}

export function scrollTo(selector: string) {
	const element = document.querySelector(selector) as HTMLElement | null;
	if (!element) return;
	const targetOffset = getOffset(element);
	const scrollingElement = document.scrollingElement!;
	animate(scrollingElement.scrollTop, targetOffset.top, {
		type: "spring",
		damping: 20,
		onUpdate: (value) => {
			scrollingElement.scrollTop = value;
		},
	});
}
