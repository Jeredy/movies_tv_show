import { CategoryModel } from "../models/category";

export interface CategoryProps {
  data: CategoryModel[];
}

export interface ItemDetailsProps {
  name: string;
  id: string;
}
