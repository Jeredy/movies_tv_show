export interface AlertProps {
  text: string;
  buttonText: string;
  buttonLink?: string;
  isCaution?: boolean;
  isLoading?: boolean;
  clickFunction?: () => void;
  cautionFunction?: () => void;
  setShowDetails?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AlertStyleProps {
  isCaution?: boolean;
}
