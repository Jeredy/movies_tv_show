import { SelectDataModel } from "../models/select";

export interface SelectProps {
  data: SelectDataModel[];
  children?: React.ReactChild;
  onFocus?: any;
  setData?: (data: any) => void;
  initialValue?: number;
}

export interface SelectContainerProps {
  hasChildren: boolean;
  isFocus: boolean;
  hasCheckBox?: boolean;
  width?: number;
}

export interface IconContainerProps {
  selected?: boolean;
}

export interface SelectStyle {
  inputStyle?: React.CSSProperties;
  isPageItems?: boolean;
  width?: number;
}

export interface ShowOptionsProps {
  qtdeItems: number;
}
