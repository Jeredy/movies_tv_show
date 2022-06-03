export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  children?: React.ReactChild;
  register?: any;
  error?: string | undefined;
  onFocus?: any;
  maxLength?: number;
  value?: any;
  required?: boolean;
}

export interface InputContainerProps {
  hasChildren: boolean;
  isFocus?: unknown;
  hasError: boolean;
  width?: number;
}

export interface InputStyle {
  inputStyle?: React.CSSProperties;
  width?: number;
}

export interface CategoryInput {
  category?: string;
}
