import { SelectDataModel } from "../models/select";

export interface SelectProps {
  data: SelectDataModel[];
  children?: React.ReactChild;
  iconStart?: boolean;
  onFocus?: any;
  setData?: (data: any) => void;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  setModality?: React.Dispatch<React.SetStateAction<string[]>>;
  hasCheckBox?: boolean;
}

export interface SelectContainerProps {
  hasChildren: boolean;
  isFocus: boolean;
  hasCheckBox?: boolean;
}

export interface IconContainerProps {
  selected?: boolean;
}

export interface SelectStyle {
  inputStyle?: React.CSSProperties;
  isSmall?: boolean;
  isPageItems?: boolean;
}

export interface ShowOptionsProps {
  qtdeItems: number;
  isSmall: boolean;
}
