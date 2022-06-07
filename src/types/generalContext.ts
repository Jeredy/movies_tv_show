import { CategoryModel } from "../models/category";
import { StreamingModel } from "../models/streaming";

export interface PropsContext {
  pageDetails: any;
  editData: any;
  movies: StreamingModel[];
  tvShows: StreamingModel[];
  categories: CategoryModel[];
  setPageDetails?: (pageDetails: any) => void;
  setEditData?: (editData: any) => void;
  addMovie?: (movies: StreamingModel, route: string) => void;
  deleteMovie?: (id: number, route: string) => void;
  editMovie?: (movies: StreamingModel, route: string) => void;
  addCategory?: (category: CategoryModel) => void;
  editCategory?: (category: CategoryModel) => void;
  deleteCategory?: (id: string) => void;
}

export interface PropsState {
  pageDetails: any;
  editData: any;
  movies: StreamingModel[];
  tvShows: StreamingModel[];
  categories: CategoryModel[];
}

export interface PropsAction {
  type: Types;
  payload?: any;
}

export enum Types {
  SET_PAGE_DETAILS = "SET_PAGE_DETAILS",
  SET_EDIT_DATA = "SET_EDIT_DATA",
  ADD_MOVIE = "ADD_MOVIE",
  DELETE_MOVIE = "DELETE_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
  ADD_CATEGORY = "ADD_CATEGORY",
  EDIT_CATEGORY = "EDIT_CATEGORY",
  DELETE_CATEGORY = "DELETE_CATEGORY",
}

export interface LayoutProps {
  children: React.ReactNode;
}
