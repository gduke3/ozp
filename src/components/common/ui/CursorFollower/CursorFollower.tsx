import React, { useCallback, useRef } from "react";
import { animated, useSpring } from "react-spring";
import useMeasure from "react-use-measure";

import { normalizePosition, mergeRefs } from "@core/utils/common.utils";
import { calculateMousePositionInsideElement } from "@core/utils/dom.utils";

export interface Props extends React.ComponentProps<"div"> {
	areaOffset?: number;
	enabled?: boolean;
}

export const CursorFollower: React.FC<Props> = ({
	children,
	enabled = true,
	areaOffset = 10,
	...rest
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerMeasureRef, containerRect] = useMeasure({ debounce: 100 });
	const [wrapperStyle, wrapperAnimationApi] = useSpring(() => ({ x: 0, y: 0 }));

	const handleMouseMove = useCallback(
		(event: React.MouseEvent) => {
			if (!enabled) return;

			const { pageX: x, pageY: y } = event;
			const position = calculateMousePositionInsideElement(containerRef.current as HTMLDivElement, {
				x,
				y,
			});

			const normalized = normalizePosition(
				{ x: Math.max(0, position.x), y: Math.max(0, position.y) },
				containerRect
			);

			wrapperAnimationApi.start({ x: normalized.x * areaOffset, y: normalized.y * areaOffset });
		},
		[enabled, containerRect, wrapperAnimationApi, areaOffset]
	);

	const handleMouseLeave = useCallback(() => {
		wrapperAnimationApi.start({ x: 0, y: 0 });
	}, [wrapperAnimationApi]);

	return (
		<div
			{...rest}
			ref={mergeRefs(containerRef, containerMeasureRef)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ padding: areaOffset, margin: -areaOffset }}>
			<animated.div style={{ ...wrapperStyle, willChange: enabled ? "transform" : "auto" }}>
				{children}
			</animated.div>
		</div>
	);
};
