import React from "react";

export interface ButtonProps {
  id?: string;
  type?: "submit";
  title: string;
  clickFunction?: () => void;
  isLoading?: boolean;
  children?: React.ReactChild;
  inverterColor?: boolean;
  customColor?: string;
}

export interface ContainerProps {
  isLoading?: boolean;
  disabled?: boolean;
  inverterColor?: boolean;
  customColor?: string;
}
