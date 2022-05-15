import React from "react";

export interface ButtonProps {
  type?: "submit";
  title: string;
  clickFunction?: () => void;
  isLoading?: boolean;
  children?: React.ReactChild;
  invertedColor?: boolean;
}
