export type LoadingType =
	| "blank"
	| "balls"
	| "bars"
	| "bubbles"
	| "cubes"
	| "cylon"
	| "spin"
	| "spinningBubbles"
	| "spokes";

export interface LoadingProps {
	type?: LoadingType;
	color?: string;
	text?: string;
}
