export function clamp(number: number, min: number, max: number) {
	number = Math.max(number, min);
	number = Math.min(number, max);

	return number;
}
