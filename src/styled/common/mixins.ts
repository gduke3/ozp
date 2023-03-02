import { css } from "styled-components";

export const verticalCenterMixin = css`
	top: 50%;
	position: absolute;
	transform: translateY(-50%);
`;

export function generateOffsetMixin({
	as,
	offsetX,
	offsetY,
}: {
	as: "parent" | "children";
	offsetX?: string;
	offsetY?: string;
}) {
	const cssPropsPostfix = {
		x: ["left", "right"],
		y: ["top", "bottom"],
	};

	const getParentOffset = (offset: string) => `calc(${offset} * -0.5)`;
	const getChildrenOffset = (offset: string) => `calc(${offset} * 0.5)`;
	const generateMixin = (prefix: string, postfix: string[], offset: string) =>
		postfix
			.reduce((acc, propPostfix) => [...acc, `${prefix}-${propPostfix}: ${offset};`], [] as string[])
			.join("");

	return css`
		${as === "parent" &&
		offsetX &&
		generateMixin("margin", cssPropsPostfix.x, getParentOffset(offsetX))}
		${as === "parent" &&
		offsetY &&
		generateMixin("margin", cssPropsPostfix.y, getParentOffset(offsetY))}
		${as === "children" &&
		offsetX &&
		generateMixin("padding", cssPropsPostfix.x, getChildrenOffset(offsetX))}
		${as === "children" &&
		offsetY &&
		generateMixin("padding", cssPropsPostfix.y, getChildrenOffset(offsetY))}
	`;
}
