export interface InputProps {
	name: string;
	type: string;
	placeholder: string;
	children?: React.ReactChild;
	iconStart?: boolean;
	register?: any;
	error?: string | undefined;
	onFocus?: any;
	maxLength?: number;
	value?: any;
	required?: boolean;
	searchFilter?: (search: any) => void;
}

export interface InputContainerProps {
	hasChildren: boolean;
	isFocus?: unknown;
	hasError: boolean;
	width?: number;
}

export interface IconContainerProps {
	iconStart: boolean;
}

export interface InputStyle {
	inputStyle?: React.CSSProperties;
	width?: number;
	isSecondary?: boolean;
}

export interface InputLabel {
	showLabel?: boolean;
}

export interface ModalityInput {
	modality?: string;
	minPrice?: string;
}

export interface CategoryInput {
	category?: string;
}
